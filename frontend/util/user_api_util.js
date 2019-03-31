export const updateUser = user => {
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        date: { user }
    });
};

export const fetchUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${userId}`,
    });
};