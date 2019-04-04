export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.isLogin) {
        console.log('is not authenticated')
        // return redirect('/login')
    }
}