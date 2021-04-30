function changeOuterLinks() {

    document.querySelectorAll('a').forEach(link => {
        if (link.innerHTML.includes('outer-link')) {
            link.setAttribute('target', '_blank');
            link.innerHTML = `<strong>${link.innerHTML}</strong>`;
        }
    })

    document.querySelectorAll('nav').forEach(item => {
        item.style.display = 'flex';
        item.style.flexDirection = 'column';
        item.style.width = '30%';
        item.style.margin = '0px auto';
        item.style.border = '1px solid blue';
        item.style.padding = '16px';
    });

};

export { changeOuterLinks };