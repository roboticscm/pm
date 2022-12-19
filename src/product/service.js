export class ProductService {
    static find (filterText) {
        return new Promise((resolve, reject) => {
            const data = [
                {
                    id: 1,
                    name: 'iPhone 13',
                    price: 500
                }, {
                    id: 2,
                    name: 'iPhone 13 Pro Max',
                    price: 1000
                }, {
                    id: 3,
                    name: 'Samsung galaxy A20',
                    price: 100
                }, {
                    id: 4,
                    name: 'Samsung galaxy A30',
                    price: 150
                }
            ]

            setTimeout(() => {
                resolve(data.filter(it => {
                    return it.name.toLowerCase()
                        .includes(filterText ? filterText.toLowerCase() : '')
                }))
            }, 500)
        })
    }
}