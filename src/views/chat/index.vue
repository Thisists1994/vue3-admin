<template>
  <div class="container">
    <!-- <button class="logout-btn" @click="handleLogout">退出</button>
    <div class="chat-container">
        <Contacts :contacts="contacts" />
        <Message :socket="socket" v-if  ="currentChatStore.currentChat" />
        <Welcome v-else />
    </div> -->
    聊天窗口
    <input type="text" id="userName" v-model="username" />
    <p style="font-size: 22px">消息框</p>
    <div id="allmsg">
      <template v-if="resPrivateMsg.length > 0">
        <div v-for="(rpm, i) in resPrivateMsg" class="priva-msg-item" :key="i">
          <p v-if="rpm.name !== 'admin'">{{ `ws：${rpm.message}` }}</p>
          <p v-else>{{ `admin：${rpm.message}` }}</p>
        </div>
      </template>
    </div>
    <br />
    <br />
    <br />
    <input
      type="text"
      name=""
      id="txtinput"
      placeholder="按钮发送消息"
      v-model="testTxt"
    />
    <button @click="submitMsg">发送消息</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useWebSocket from '@/utils/webSocket';
const username = ref('');
const testTxt = ref('');
type SocketMsgType = {
  name: string;
  message: string;
};
const resPrivateMsg = ref<SocketMsgType[]>([]);
const storeInfo = ref({
  connection_id: '10085',
  user_id: '',
  access_token: '',
  model_id: '',
});

// const ws_host =
//   'wss://localtest.wemate.ai/ws?connection_id=10085&user_id=&access_token=&model_id=';
// console.log(import.meta.env.VITE_USER_NODE_ENV)
const url = 'wss://localtest.wemate.ai/ws';
const { connection_id, user_id, access_token, model_id } = storeInfo.value;
let ws_host = `${url}?connection_id=${connection_id}&user_id=${user_id}&access_token=${access_token}&model_id=${model_id}`;
// socket = new WebSocket(ws_host);
// wsAttribute.wsConnect = new WebSocket(ws_host);
// 在组件中使用 WebSocket 连接函数
const { socket, createWebSocket, wsReset } = useWebSocket(ws_host);
createWebSocket();

if (socket.value) {
  // 收到ws消息
  socket.value.onmessage = (res: any) => {
    console.log('ws消息：' + res.data);

    const SocketMsgVO = {
      name: 'ws',
      message: res.data,
    };
    resPrivateMsg.value.push(SocketMsgVO);
    console.log(resPrivateMsg.value);
    // 收到服务器信息，心跳重置
    wsReset();
  };
}

// 发送消息
const submitMsg = () => {
  // testTxt.value += '\n';
  const SocketMsgVO = {
    name: <string>localStorage.getItem('userName'),
    message: testTxt.value,
  };
  resPrivateMsg.value.push(SocketMsgVO);
  socket.value?.send(testTxt.value);
  testTxt.value = '';
};
</script>

<style scoped lang="scss">
#allmsg {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  overflow: auto;
}
#txtinput {
  width: 150px;
  height: 40px;
}
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  //   background-color: #131324;
  .logout-btn {
    position: absolute;
    top: 1rem;
    right: 0rem;
    background-color: rgb(56, 72, 93);
    color: white;
    margin: 0 2rem;
    padding: 0.5rem 1rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: rgb(100, 182, 135);
    }
  }
  .chat-container {
    color: white;
    height: 85vh;
    width: 85vw;
    border-radius: 1rem;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
}
</style>
