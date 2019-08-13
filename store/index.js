export const state = () => ({
    user: {},
    messages: []
});

export const mutations = {
    setUser(state, user){
        state.user = user
    },
    sendMessage(state, payload){
        console.log('in');
        state.messages.push(payload)
    },
    clearData(state){
        state.user = {}
    }
}

export const actions = {
    SOCKET_newMessage(ctx, data) {
        console.log('m.r. newMessage', data);
    }
}
