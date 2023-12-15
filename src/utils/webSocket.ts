import { reactive, ref, onBeforeUnmount } from 'vue';

// 定义 WebSocket 连接函数
const useWebSocket = (url: string) => {
  const socket = ref<WebSocket | null>(null);
  const wsAttribute = reactive({
    lockReconnect: false, //是否真正建立连接
    heartTimer: <number | undefined>undefined, //心跳计时器
    serverTimer: <number | undefined>undefined, // 服务器心跳计时器
    reconnectTimer: <number | undefined>undefined, // 断开重连计时器,
    sendFixHeartTimer: null,
    pingIntervalSeconds: 45 * 1000, // 45秒一次心跳
  });

  const createWebSocket = () => {
    console.log(11);
    socket.value = new WebSocket(url);

    socket.value.onopen = (val) => {
      console.log('打开连接，开启心跳', val);
      wsStart();
    };

    socket.value.onerror = (error) => {
      console.error('连接错误 error:', error);
      wsReconnect();
    };

    socket.value.onclose = (error: any) => {
      console.log('websocket 断开: ', error);
      wsReconnect();
    };
  };

  const closeWebSocket = () => {
    if (socket.value) {
      socket.value.close();
    }
  };
  // 重新连接
  const wsReconnect = () => {
    console.log('重新连接', wsAttribute.lockReconnect);
    if (wsAttribute.lockReconnect) {
      return;
    }
    wsAttribute.lockReconnect = true;
    // 没连接上会一直重连，设置延迟避免请求过多
    wsAttribute.reconnectTimer && clearTimeout(wsAttribute.reconnectTimer);
    wsAttribute.reconnectTimer = setTimeout(
      () => {
        //新连接
        createWebSocket();
        wsStart();
        wsAttribute.lockReconnect = false;
      },
      Math.random() * 2000 + 3000,
    );
  };

  // 开启ws心跳
  const wsStart = () => {
    wsAttribute.heartTimer && clearTimeout(wsAttribute.heartTimer);
    wsAttribute.serverTimer && clearTimeout(wsAttribute.serverTimer);
    wsAttribute.heartTimer = setTimeout(() => {
      //这里发送一个心跳，后端收到后，返回一个心跳消息
      if (socket.value?.readyState == 1) {
        console.log('链接正常，发送ping');
        // wsAttribute.wsConnect.send('ping');
      } else {
        //否则重连
        wsReconnect();
      }
      //超时关闭，超时时间为 5s
      wsAttribute.serverTimer = setTimeout(() => {
        //超时关闭
        console.log('超时关闭');
        closeWebSocket();
      }, 5000);
    }, wsAttribute.pingIntervalSeconds);
  };

  // 重置心跳
  const wsReset = () => {
    console.log('重置心跳了ws');
    //清除时间
    clearTimeout(wsAttribute.heartTimer);
    clearTimeout(wsAttribute.serverTimer);
    //重启心跳
    wsStart();
  };

  onBeforeUnmount(() => {
    closeWebSocket();
  });

  return {
    socket,
    wsReset,
    createWebSocket,
    closeWebSocket,
  };
};

export default useWebSocket;
