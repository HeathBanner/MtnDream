
// This function will check if the required parameters are passing
// before passing anything to the database
export const PreSubmit = (edit) => {
    switch (true) {
        case !edit.title.text:
            return { warning: true, message: 'Title is required!' };
        case !edit.description.text:
            return { warning: true, message: 'Description is required!' };
        case !edit.readLength.text:
            return { warning: true, message: 'Read Length is required!' };
        case !edit.jumbotron.src:
            return { warning: true, message: 'Jumbotron is required!' };
        case !edit.body[0].text:
            return { warning: true, message: 'A body section is required!' };
        case edit.title.isPublished:
            return { warning: false };
        case !edit.title.isPublished:
            return { warning: false };
        default:
            return { error: true, message: 'Something went wrong :(' };
    }
};

export const FetchSubmit = async (edit, url) => {
    const data = HandleData(edit);
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    };

    const res = await fetch(`/api/editors/${url}`, options);
    const json = await res.json();

    if (json.error) {
        return { error: true, message: json.error };
    }

    return { success: true, message: 'Article published!' };
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const HandleData = (edit) => {
    const now = new Date();
    const date = {
        parsedDate: `${months[now.getMonth()]} ${now.getDate()}`,
        epoch: now.getTime(),
    };
     return {
        title: edit.title,
        description: edit.description,
        readLength: edit.readLength,
        jumbotron: edit.jumbotron,
        body: edit.body,
        date,
    };
}