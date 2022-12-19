

export const User = () => {
    const deleteUser = () => {
        alert('User should be deleted')
    }
    const saveUser = () => {
        alert('User should be saved')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}