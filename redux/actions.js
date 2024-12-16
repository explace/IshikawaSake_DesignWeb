export const changeLangFunc = () => {
    return {
        type: 'changeLangAction',
    }
}
export const changeNavTransition = (val) => {
    return {
        type: 'changeNavTransitionAction',
        payload: val
    }
}
export const getPostsFunc = (val) => {
    return {
        type: 'getPostsAction',
        payload: val
    }
}