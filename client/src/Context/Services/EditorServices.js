export const handleFetchList = async () => {
    const result = await fetch('/api/editors/getList');
    const json = await result.json();
    return json;
};

export const fetchEditArticle = async (title) => {
    const result = await fetch('/api/editors/getArticle', {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: { 'Content-Type': 'application/json' },
    });
    const json = await result.json();
    console.log(json);
    json.jumbotron.src = Buffer.from(json.jumbotron.src.data, 'binary');
    return {
        title: json.title,
        description: json.description,
        readLength: json.readLength,
        jumbotron: json.jumbotron,
        body: json.body,
        isPublished: json.isPublished
    };
};

export const handleInputSwitch = (value, section, article) => {
    switch (section.El) {
        case 'title':
            return { ...article, title: { ...article.title, text: value }};
        case 'description':
            return { ...article, description: { ...article.description, text: value }};
        case 'readLength':
            return { ...article, readLength: { ...article.readLength, text: value }};
        case 'body':
            let newBody = article.body;
            newBody[section.index] = { ...newBody[section.index], text: value };
            return { ...article, body: newBody };
        default:
            return
    }
};

export const handleFontSwitch = (newFont, article) => {
    switch (article.sectionMode.el) {
        case 'title':
            return { ...article, title: { ...article.title, font: newFont }};
        case 'description':
            return {
                ...article,
                description: {
                    ...article.description,
                    font: newFont 
            }};
        case 'readLength':
            return {
                ...article,
                readLength: {
                    ...article.readLength,
                    font: newFont
                }};
        case 'body':
            let newBody = article.body;
            newBody[article.sectionMode.index].font = newFont;
            return { ...article, body: [ ...newBody ]};
        default:
            break;
    }
};

export const handleStylingSwitch = (style, article) => {
    console.log(article.sectionMode);
    switch (article.sectionMode.el) {
        case 'title':
            return { ...article, title: { ...article.title, [style]: !article.title[style] }};
        case 'body':
            let newBody = article.body;
            newBody[article.sectionMode.index][style] = !newBody[article.sectionMode.index][style];
            console.log(newBody[article.sectionMode]); 
            return { ...article, body: [ ...newBody ] };   
        default:
            break;
    }
};

export const handleJustifySwitch = (justification, article) => {
    let result;
    switch (article.sectionMode.el) {
        case 'title':
            return { ...article, title: { ...article.title, justify: justification }};
        case 'description':
            result = handleInfoJustifySwitch(justification, article);
            return result;
        case 'readLength':
            result = handleInfoJustifySwitch(justification, article);
            return result;
        case 'jumbotron':
            result = handleJumboJustifySwitch(justification, article);
            return result;
        case 'body':
            let newBody = article.body;
            newBody[article.sectionMode.index].justify = justification;    
            return { ...article, body: [ ...newBody ] };
        case 'image':
            result = handleImageJustifySwitch(justification, article);
            return result;
        default:
            break;
    }
};

export const handleTextStyleSwitch = (style, article) => {
    switch (article.sectionMode.el) {
        case 'title':
            return { ...article, title: { ...article.title, textStyle: style }};
        case 'body':
            let newBody = article.body;
            newBody[article.sectionMode.index].textStyle = style;    
            return { ...article, body: [ ...newBody ] };
        default:
            break;
    }
};

export const handleTextColorSwitch = (color, article) => {
    switch (article.sectionMode.el) {
        case 'title':
            return { ...article, title: { ...article.title, color: color }};
        case 'description':
            return { ...article, desciption: { ...article.description, color: color }};
        case 'body':
            let newBody = article.body;
            newBody[article.sectionMode.index].color = color;
            return { ...article, body: [ ...newBody ] };
        default:
            break;
    }
};

// The initial state for text elements
export const initialPreview = {
    text: '',
    bold: false,
    italic: false,
    underline: false,
    color: 'black',
    highlight: false,
    font: 'Roboto',
    justify: 'left',
    textStyle: 'body1',
    marginTop: 40,
    marginBottom: 0,
    isText: true,
    isImage: false,
};
// The initial state for Info
export const initialInfo = {
    text: '',
    font: 'Roboto',
    justify: 'center',
    color: '',
};
// The initial state for Images
export const initialImg = {
    isImage: true,
    src: '',
    alt: '',
    height: '',
    width: '',
    justify: 'center',
    marginTop: 40,
    marginBottom: 0,
};

export const initialArticle = {
    sectionMode: { el: 'title' },
    title: { ...initialPreview, isPublished: false },
    description: { ...initialInfo, textStyle: 'h5' },
    readLength: initialInfo,
    jumbotron: initialImg,
    body: [initialPreview],
    isPublished: false
};

export const initialNotify = {
    error: false,
    warning: false,
    success: false,
    message: ""
};

// This function will check with section the user is in
// and update the value with the new selected value
const handleJumboJustifySwitch = (justification, article) => {
    return {
        ...article,
        jumbotron: {
            ...article.jumbotron,
            justify: justification
        }
    };
};

// This function will check with section the user is in
// and update the value with the new selected value
const handleInfoJustifySwitch = (justification, article) => {
    if (article.sectionMode.el === 'description') {
        return { ...article, description: { ...article.description, justify: justification }};
    } 
    return { ...article, readLength: { ...article.readLength, justify: justification }};
};

// This function will check with section the user is in
// and update the value with the new selected value
const handleImageJustifySwitch = (justification, article) => {
    let newBody = article.body;
    if (justification === 'left') {
        newBody[article.sectionMode.index].justify = 'flex-start';
    }
    if (justification === 'center' || 'justify') {
        newBody[article.sectionMode.index].justify = 'center';
    } else {
        newBody[article.sectionMode.index].justify = 'flex-end';
    }

    return { ...article, body: [newBody] };
};