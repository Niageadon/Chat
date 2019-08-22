export const state = () => ({
    user: {},
    messages: []
});

export const mutations = {
    setUser(state, user){
        state.user = user
    },
    sendMessage(state, payload){
        console.log(payload);
        state.messages.push(payload)
    },
    clearData(state){
        state.user = {};
        state.messages.length = 0;
    },
    SOCKET_newMessage(state, message) {
        // message - {}
        console.log('mes',message);
        state.messages.push(message);
    }
};

