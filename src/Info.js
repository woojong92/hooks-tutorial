import React, { useReducer, useEffect } from 'react'

function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    }
}


const Info = () => {
    // const [name, setName] = useState('')
    // const [nickname, setNickname] = useState('')
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })

    const {name, nickname} = state

    useEffect(() => {
        console.log('effect')
        console.log(name)
        return () => {
            console.log('cleanup')
            console.log(name)
        }
    }, [name])

    const onChange = e => {
        dispatch(e.target)
    }

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange} />
                <input name='nickname' value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;