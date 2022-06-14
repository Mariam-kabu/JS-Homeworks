function rmHtmlTags(param) {
    if (typeof param !== "string") throw new TypeError;
    const htmlTag = /(<|<\/)\w+>/ig;
    console.log(param.replaceAll(htmlTag, ''));
}

rmHtmlTags('<p><strong><em>Content</em></strong></p>');