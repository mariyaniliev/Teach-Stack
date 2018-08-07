//Action Creator
export const selectLibrary = (libraryId) => {
    //Action
    return {
        type: 'select_library',
        payload: libraryId
    }
}