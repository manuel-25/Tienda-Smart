const data = [
    {
        id: 1,
        title: "TCL 20 SE 256 GB nuit black 6 GB RAM",
        price: 61.999,
        stock: 10,
        category: "Smartphones",
        detail: "Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        img: "/images/products/D_NQ_NP_2X_685173-MLA49653440486_042022-F.webp"
    },
    {
        id: 2,
        title: "Moto G22 128 GB cosmic black 4 GB RAM",
        price: 46.999,
        stock: 10,
        category: "Smartphones",
        detail: "Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        img: "./images/products/D_NQ_NP_2X_854793-MLA50262132804_062022-F.webp"
    },
    {
        id: 3,
        title: "Moto G60s 128 GB aqua 6 GB RAMM",
        price: 69.799,
        stock: 10,
        category: "Smartphones",
        detail: "Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        img: "/images/products/D_NQ_NP_2X_966438-MLA48112811958_112021-F.webp"
    },
    {
        id: 4,
        title: "Samsung Galaxy A32 128 GB awesome blue 4 GB RAM",
        price: 75.999,
        stock: 10,
        category: "Smartphones",
        detail: "Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        img: "/images/products/D_NQ_NP_2X_878776-MLA48428092348_122021-F.webp"
    },
    {
        id: 5,
        title: "Moto G52 128 GB charcoal grey 6 GB RAM",
        price: 59.999,
        stock: 10,
        category: "Smartphones",
        detail: "Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        img: "/images/products/D_NQ_NP_2X_698891-MLA50817265580_072022-F.webp"
    },
    {
        id: 6,
        title: "Samsung Galaxy A22 5G 128 GB gray 4 GB RAM",
        price: 59.999,
        stock: 10,
        category: "Smartphones",
        detail: "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        img: "/images/products/D_NQ_NP_2X_863356-MLA48697556226_122021-F.webp"
    },
    {
        id: 7,
        title: "Quantum Q20 Dual SIM 128 GB blanco 4 GB RAM",
        price: 39.999,
        stock: 10,
        category: "Smartphones",
        detail: "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        img: "/images/products/D_NQ_NP_2X_940194-MLA50185436946_062022-F.webp"
    },
    {
        id: 7,
        title: "TCL 20B 64 GB space gray 4 GB RAM",
        price: 38.799,
        stock: 10,
        category: "Smartphones",
        detail: "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        img: "/images/products/D_NQ_NP_2X_685173-MLA49653440486_042022-F (1).webp"
    },
]

export function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

export function getSingleItem(itemId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let findItem = data.find( item => item.id === itemId)
            if (findItem)
                resolve(findItem)
            else   
                reject(new Error("Error Item no encontrado"))
        }, 1500)
    })
}