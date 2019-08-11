export default function ({store, redirect}) {
    console.log(1)
    if(store.state.user.length){
        redirect('/')
    }
}