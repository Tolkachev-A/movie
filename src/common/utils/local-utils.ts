export const loadStateGalleryStorage = () => {
    try {
        const serializedState = sessionStorage.getItem('itemsMovie');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: {
    movieGallery: {
        itemsMovie: {},
    },
}) => {
    try {
        sessionStorage.setItem('itemsMovie', JSON.stringify(state.movieGallery.itemsMovie));
    } catch {
        throw new Error('Error save to Session Storage');
    }
};