<template>
  <div class="m-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="trigger" style="width:0;height:0;overflow: hidden">

    </div>
    <ul>
      <li v-for="file in fileList" :key="file.name">
        <img :src="file.url" width="100" height="100">
        {{file.name}}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "MUploader",
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
          }
        },
        data(){
            return{
              url:'about:blank'
            }
        },
        methods:{
            onClickUpload(){
              let input = this.createInput()
              input.addEventListener('change',()=>{
                  let file = input.files[0]
                  this.uploadFile(file)
                  input.remove()
              })
              input.click()
            },
            createInput(){
                let input = document.createElement('input')
                input.type = 'file'
                this.$refs.trigger.appendChild(input)
                return input
            },
            uploadFile(file){
                let formData = new FormData()
                formData.append(this.name,file)
                let {name,size,type} = file
                this.doUploadFile(formData,(response)=>{
                    let url = this.parseResponse(response)
                    this.url = url
                    while(this.fileList.filter(f=>f.name===name).length>0){
                        let dotindex = name.lastIndexOf('.')
                        let nameWithOutExtension = name.substring(0,dotindex)
                        let extension = name.substring(dotindex)
                        name=nameWithOutExtension+'1'+extension
                    }
                    this.$emit('update:fileList',[...this.fileList,{name,size,type,url}])
                })
            },
            doUploadFile(formData,success){
                var xhr = new XMLHttpRequest()
                xhr.open(this.method,this.action)
                xhr.onload = ()=> {
                    success(xhr.response)
                }
                xhr.send(formData)
            }
        }
    }
</script>

<style scoped>
  .m-uploader{
  }
</style>