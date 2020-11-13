export function reducer(state, action) {
    switch (action.type) {
        case "ADD_FAV":
            const newList = [...state.favList]
            newList.push(action.payload.selectedRestaurant)
            state.favList = newList
            return {...state};
    
        default:
            return state;
    }
};

// export {reducer}