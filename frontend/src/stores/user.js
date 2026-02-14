import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserstore = defineStore('user',()=>{
    const id = ref(1)
    const username = ref('PLUS')
    const photo = ref('http://127.0.0.1:8000/media/user/photos/1_4f873a9454.png')
    const profile = ref('111')
    const accessToken = ref('111')

    function isLogin(){
        return !!accessToken.value //双叹号用来判断该值是否为空,必须带 value
    }

    function setAccessToken(token){
        accessToken.value = token
    }

    function setUserInfo(data) {
        id.value = data.user_id
        username.value = data.username
        photo.value = data.photo
        profile.value = data.Profile
    }

    function logout(){
        id.value=0
        username.value=''
        photo.value=''
        profile.value=''
        accessToken.value=''
    }

    return {
        id,
        username,
        photo,
        profile,
        accessToken,
        isLogin,
        setAccessToken,
        setUserInfo,
        logout
    }
})