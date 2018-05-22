<template>
    <div class="row">
        <div class="col-sm-6 offset-sm-3 frame mt-2">
            <ul class="chat-container">
                <li style="width:100%" v-for="item in chat" :key="item['.key']">
                    <div class="msj macro">
                        <div class="avatar"><img class="img-circle" style="width:50%; border-radius: 50%;" :src="getAvatar(item.userId)" /></div>
                        <div class="text text-l">
                            <p>{{ item.content }}</p>
                            <p>
                                <small>{{ formatDate(item.date) }}</small>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <div>
                <div class="msj-rta macro">
                    <div class="text text-r" style="background:whitesmoke !important">
                        <input class="mytext" placeholder="Escribe un mensaje" v-model="userMessage"/>
                    </div>

                </div>
                <button class="btn btn-1" v-on:click="sendMessage()"
                        style="padding:10px; background-color: #5cb85c; color: #FFF; font-weight: bold; margin: 10px;">
                    Enviar
                </button>
            </div>
        </div>
    </div>
</template>

<style>
    .mytext {
        border: 0;
        padding: 10px;
        background: whitesmoke;
    }

    .text {
        width: 75%;
        display: flex;
        flex-direction: column;
    }

    .text > p:first-of-type {
        width: 100%;
        margin-top: 0;
        margin-bottom: auto;
        line-height: 13px;
        font-size: 12px;
    }

    .text > p:last-of-type {
        width: 100%;
        text-align: right;
        color: silver;
        margin-bottom: -7px;
        margin-top: auto;
    }

    .text-l {
        float: left;
        padding-right: 10px;
    }

    .text-r {
        float: right;
        padding-left: 10px;
    }

    .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        float: left;
        padding-right: 10px;
    }

    .macro {
        margin-top: 5px;
        width: 85%;
        border-radius: 5px;
        padding: 5px;
        display: flex;
    }

    .msj-rta {
        float: right;
        background: whitesmoke;
    }

    .msj {
        float: left;
        background: white;
    }

    .frame {
        background: #e0e0de;
        height: 450px;
        overflow: hidden;
        padding: 0;
    }

    .frame > div:last-of-type {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
    }

    body > div > div > div.msj-rta.macro {
        margin: auto;
        margin-left: 1%;
    }

    .chat-container {
        width: 100%;
        list-style-type: none;
        padding: 18px;
        position: absolute;
        bottom: 47px;
        display: flex;
        flex-direction: column;
        top: 0;
        overflow-y: scroll;
    }

    .msj:before {
        width: 0;
        height: 0;
        content: "";
        top: -5px;
        left: -14px;
        position: relative;
        border-style: solid;
        border-width: 0 13px 13px 0;
        border-color: transparent #ffffff transparent transparent;
    }

    .msj-rta:after {
        width: 0;
        height: 0;
        content: "";
        top: -5px;
        left: 14px;
        position: relative;
        border-style: solid;
        border-width: 13px 13px 0 0;
        border-color: whitesmoke transparent transparent transparent;
    }

    input:focus{
        outline: none;
    }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #d4d4d4;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: #d4d4d4;
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: #d4d4d4;
    }
    :-moz-placeholder { /* Firefox 18- */
        color: #d4d4d4;
    }
</style>

<script>

    import {db} from './../firebase'
    import {auth} from './../firebase'

    export default {
        data() {
            return {
                meAvatar: "http://nabeel.co.in/files/bootsnipp/team/1.jpg",
                othersAvatar: "http://nabeel.co.in/files/bootsnipp/team/1.jpg",
                sending: false,
                userMessage: "",
            }
        },
        computed: {
            currentUserId: function() {

                if (auth.currentUser) {
                    return auth.currentUser.uid;
                } else {
                    return null;
                }
            }
        },
        firebase: {
            chat: {
                source: db.ref("chat")
            }
        },
        methods: {
            sendMessage() {
                console.debug("|"+this.userMessage+"|");
                if (this.userMessage != "") {
                    this.sending = true
                    let now = new Date();

                    let chatMsgItem = {
                        user: this.currentUserId,
                        content: this.userMessage,
                        date: now.getTime(),
                    }

                    db.ref("chat").push(chatMsgItem).then(() => {
                        this.sending = false
                        this.userMessage = "";
                    }).catch((error) => {
                        alert(error);
                    });

                }else{
                    alert("Escribe un mensaje para todos");
                }
            },
            getAvatar(userId){
                console.debug("obtiene avatar para usuario: "+userId);
                let selectedAvatar = ""

                if(this.currentUserId == userId){
                    selectedAvatar = this.meAvatar
                }else{
                    selectedAvatar = this.othersAvatar
                }

                return selectedAvatar
            },
            formatDate(datetime){
                let cdate = new Date(parseInt(datetime))

                return cdate.getDate()+"-"+(cdate.getMonth()+1)+"-"+cdate.getFullYear()+" ("+cdate.getHours()+":"+cdate.getMinutes()+")"
            }
        }
    }
</script>