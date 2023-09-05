module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const icons = {
            default: 'fas fa-sort',
            asc: 'fas fa-sort-amount-up-alt',
            desc: 'fas fa-sort-amount-down',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const sortType = field === sort.column ? sort.type : 'default';
        const type = types[sort.type];
        const icon = icons[sortType];
        return `<a href="?_sort&column=${field}&type=${type}">
            <span class="${icon}"></span>
        </a>`;
    },
};
