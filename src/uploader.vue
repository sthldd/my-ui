<template>
  <div class="m-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="trigger" style="width:0;height:0;overflow: hidden"></div>
    <ul class="m-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status==='uploading'">
          <m-icon name="loading" class="m-uploader-loading"></m-icon>
        </template>
        <template v-else-if="file.type.indexOf('image')===0">
          <img class="m-uploader-image" :src="file.url">
        </template>
        <template v-else>
          <div class="m-uploader-defaultImage"></div>
        </template>
        <span class="m-uploader-name" :class="{[file.status]:file.status}">{{file.name}}</span>
        <button @click="onRemoveFile(file)" class="m-uploader-remove">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import MButton from  './button/button'
  import MIcon from  './icon'
    export default {
        name: "MUploader",
        components:{MButton,MIcon},
        props:{
          name:{
              type:String,
              required:true
          },
          method:{
              type:String,
              required:true
          },
          action:{
              type:String,
              default:'POST'
          },
          parseResponse:{
              type:Function,
              required:true
          },
          fileList:{
              type:Array,
              default: ()=>[]
          },
          sizeLimit:{
            type:Number
          },
          multiple:{
            type:Boolean,
            default:false
          },
          acceptType:{
            type:String,
            default:'image/*'
          }
        },
        data(){
            return{
              url:'about:blank'
            }
        },
        methods:{
            onRemoveFile(file){
              let answer = window.confirm('确定要删除吗')
              if(answer){
                  let copy = [...this.fileList]
                  let index = copy.indexOf(file)
                  copy.splice(index,1)
                  this.$emit('update:fileList',copy)
              }
            },
            onClickUpload(){
              let input = this.createInput()
              input.addEventListener('change',()=>{
                  this.uploadFile(input.files)
                  input.remove()
              })
              input.click()
            },
            createInput(){
                this.$refs.trigger.innerHTML = ''
                let input = document.createElement('input')
                input.type = 'file'
                input.multiple = this.multiple;
                input.accept = this.acceptType
                this.$refs.trigger.appendChild(input)
                return input
            },
            beforeUploadFile(rawFiles,newNames){
                rawFiles = Array.from(rawFiles)
                for(var i = 0;i<rawFiles.length;i++){
                    let {size,type} = rawFiles[i]
                    if(size > this.sizeLimit){
                        this.$emit('error','文件大于2M')
                        return false
                    }
                }
                let x = rawFiles.map((rawFile,i)=>{
                    let {type,size} = rawFile
                    return {name:newNames[i],type,size,status:'uploading'}
                })
                this.$emit('update:fileList',[...this.fileList,...x])
                return true

            },
            uploadFile(rawFiles){
                let newNames = []
                for(var i = 0;i<rawFiles.length;i++){
                    let rawFile = rawFiles[i]
                    let {name} = rawFile
                    let newName = this.generateName(name)
                    newNames[i] = newName
                }
                if(!this.beforeUploadFile(rawFiles,newNames)){return}
                for(var i = 0;i<rawFiles.length;i++){
                    let rawFile = rawFiles[i]
                    let newName = newNames[i]
                    let formData = new FormData()
                    formData.append(this.name,rawFile)
                    this.doUploadFile(formData,(response)=>{
                        let url = this.parseResponse(response)
                        this.url = url
                        this.afterUploadFile(newName,url)
                    },(xhr)=>{
                        this.uploadError(xhr,newName)
                    })
                }
            },
            uploadError(xhr,newName){
                let file = this.fileList.filter(f=>f.name === newName)[0]
                let index = this.fileList.indexOf(file)
                let fileCopy = JSON.parse(JSON.stringify(file))
                fileCopy.status = 'fail'
                let fileListCopy =[...this.fileList]
                fileListCopy.splice(index,1,fileCopy)
                this.$emit('update:fileList',fileListCopy)
                let error = ''
                if(xhr.status === 0){
                    error = '网络无法连接'
                }
                this.$emit('error',error)
            },
            afterUploadFile(newName,url){
                let file = this.fileList.filter(f=>f.name === newName)[0]
                let index = this.fileList.indexOf(file)
                let copy = JSON.parse(JSON.stringify(file))
                copy.url = url
                copy.status = 'success'
                let fileListCopy =[...this.fileList]
                fileListCopy.splice(index,1,copy)
                this.$emit('update:fileList',fileListCopy)
            },
            generateName(name){
                while(this.fileList.filter(f=>f.name===name).length>0){
                    let dotindex = name.lastIndexOf('.')
                    let nameWithOutExtension = name.substring(0,dotindex)
                    let extension = name.substring(dotindex)
                    name=nameWithOutExtension+'1'+extension
                }
                return name
            },
            doUploadFile(formData,success,fail){
                var xhr = new XMLHttpRequest()
                xhr.open(this.method,this.action)
                xhr.onload = ()=> {
                    success(xhr.response)
                }
                xhr.onerror=()=>{
                    fail(xhr,xhr.status)
                }
                xhr.send(formData)
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "./var";
  @keyframes spin {
    0%{transform: rotate(0deg);}
    100%{transform:rotate(360deg);}
  }
  .m-uploader{
    &-fileList{
      list-style: none;
      padding: 0;
      >li{
        display: flex;
        align-items: center;
        margin:8px 0;
        border:1px solid darken($grey,10%);
      }
     }
    &-defaultImage{
      height:32px;
      width: 32px;
    }
    &-image{
      height:32px;
      width: 32px;
      margin-right: 8px;
      border:none;
    }
    &-name{
      margin-right: auto;
      &.success{
        color:green;
      }
      &.fail{
        color:red;
      }
    }
    &-remove{
      height:32px;
      width: 32px;
    }
    &-loading{
      height:30px;
      width: 30px;
      animation: spin 2s linear infinite;
    }
  }
</style>