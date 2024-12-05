/*
 Navicat Premium Data Transfer

 Source Server         : mongoDB
 Source Server Type    : MongoDB
 Source Server Version : 60006
 Source Host           : localhost:27017
 Source Schema         : kltn

 Target Server Type    : MongoDB
 Target Server Version : 60006
 File Encoding         : 65001

 Date: 03/12/2024 22:05:05
*/


// ----------------------------
// Collection structure for discount
// ----------------------------
db.getCollection("discount").drop();
db.createCollection("discount");

// ----------------------------
// Documents of discount
// ----------------------------
db.getCollection("discount").insert([ {
    _id: ObjectId("673cabc1b8510000bb002d43"),
    code: "123",
    discount: NumberInt("300000"),
    discountType: "amount",
    status: "active",
    startDate: ISODate("2022-12-31T17:00:00.000Z"),
    endDate: ISODate("2023-12-31T17:00:00.000Z"),
    employeeId: "67304fb63c470000fd006012",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.DiscountCollection"
} ]);
db.getCollection("discount").insert([ {
    _id: ObjectId("673de191a9aa7b5be373ef2f"),
    code: "admin",
    discount: NumberInt("213"),
    discountType: "percentage",
    status: "active",
    startDate: ISODate("2024-11-17T17:00:00.000Z"),
    endDate: ISODate("2024-11-26T17:00:00.000Z"),
    employeeId: "67304fb63c470000fd006012",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.DiscountCollection"
} ]);
db.getCollection("discount").insert([ {
    _id: ObjectId("673de340a9aa7b5be373ef30"),
    code: "admin-ci",
    discount: NumberInt("123"),
    discountType: "amount",
    status: "used",
    startDate: ISODate("2024-11-19T17:00:00.000Z"),
    endDate: ISODate("2024-11-24T17:00:00.000Z"),
    employeeId: "67304fb63c470000fd006012",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.DiscountCollection"
} ]);

// ----------------------------
// Collection structure for employee
// ----------------------------
db.getCollection("employee").drop();
db.createCollection("employee");

// ----------------------------
// Documents of employee
// ----------------------------
db.getCollection("employee").insert([ {
    _id: ObjectId("67304fb63c470000fd006012"),
    name: "admin",
    email: "admin@gmail.com",
    phone: "0734256476",
    account: "admin",
    password: "$2a$10$4BAPBqSnAIp.u0DkQzbg5uFAgH0k8vraMcaCUMll5knCHxLUsnC9a",
    role: NumberInt("2"),
    status: NumberInt("1"),
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.EmployeeCollection"
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("673b63ebde9ce33333ebde9f"),
    name: "test",
    email: "vutrieu2002@gmail.com",
    phone: "0847768886",
    address: "Việt Nam",
    account: "Vũ Đức Triệu",
    password: "$2a$10$wf.DcJGeW32UNHbrUBZNQOveognErmbSFLsRQhGE5eOaO3YiFSRcq",
    role: NumberInt("1"),
    status: NumberInt("1"),
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.EmployeeCollection"
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("673b6540de9ce33333ebdea0"),
    name: "Vũ Đức Triệu",
    email: "vutrieu2002@gmail.com",
    phone: "0847768886",
    address: "Việt Nam",
    account: "asdfc",
    password: "$2a$10$8CPUptMaTCZzdnet/OcrTOv1vLCbmKlJI78r2aLBRH.VMzfCAk36e",
    role: NumberInt("1"),
    status: NumberInt("1"),
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.EmployeeCollection"
} ]);

// ----------------------------
// Collection structure for order
// ----------------------------
db.getCollection("order").drop();
db.createCollection("order");

// ----------------------------
// Documents of order
// ----------------------------
db.getCollection("order").insert([ {
    _id: ObjectId("674c8e33ba96da1c8656ee08"),
    totalBill: NumberInt("28990000"),
    quantity: NumberInt("1"),
    items: [
        {
            productId: "6749dca9c5dea13153e2f4f8",
            productName: "iPhone 16 Pro",
            color: "titan sa mạc",
            quantity: NumberInt("1"),
            internalMemory: NumberInt("128"),
            price: NumberInt("28990000")
        }
    ],
    status: "Đã thanh toán",
    userId: "674b13b50b750000c0002a03",
    toAddress: "123, Côn Đảo, Huyện đảo Côn Đảo, Bà Rịa - Vũng Tàu",
    phoneNumber: "0987654321",
    createdAt: ISODate("2024-12-01T16:26:27.733Z"),
    updatedAt: ISODate("2024-12-01T16:27:01.01Z"),
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.OrderCollection"
} ]);

// ----------------------------
// Collection structure for product
// ----------------------------
db.getCollection("product").drop();
db.createCollection("product");

// ----------------------------
// Documents of product
// ----------------------------
db.getCollection("product").insert([ {
    _id: ObjectId("6749ccccba94ad29ff5dc989"),
    name: "iPhone 16 Pro Max",
    brandName: "iPhone",
    description: "<p>Đẹp, sang trọng, phù hợp với dân văn phòng</p>",
    isShow: true,
    status: "1",
    ram: NumberInt("8"),
    operatingSystem: "IOS",
    mainCamera: NumberInt("48"),
    selfieCamera: NumberInt("12"),
    batterySize: NumberInt("3000"),
    weight: NumberInt("229"),
    specifications: [
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("34000000"),
            colorVariant: [
                {
                    color: "Titan trắng",
                    quantity: NumberInt("4")
                }
            ]
        },
        {
            internalMemory: NumberInt("512"),
            price: NumberInt("38900000"),
            colorVariant: [
                {
                    color: "Titan trắng",
                    quantity: NumberInt("0")
                },
                {
                    color: "titan đen",
                    quantity: NumberInt("0")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Titan trắng",
            images: [
                "\\images\\test\\1732890140908_iphone-16-pro-max-titan-trang-2-638638962959545896-750x500.jpg",
                "\\images\\test\\1732890140911_iphone-16-pro-max-titan-trang-4-638638962971092889-750x500.jpg",
                "\\images\\test\\1732890140914_iphone-16-pro-max-titan-trang-8-638638962998235134-750x500.jpg",
                "\\images\\test\\1732890140901_iphone-16-pro-max-tem-99-638645212018908240-750x500.jpg"
            ]
        },
        {
            color: "titan đen",
            images: [
                "\\images\\test\\1732892282492_iphone-16-pro-max-titan-den-1-638638961830510249-750x500.jpg",
                "\\images\\test\\1732892282495_iphone-16-pro-max-titan-den-2-638630327639079437-750x500.jpg",
                "\\images\\test\\1732892282498_iphone-16-pro-max-titan-den-3-638630327644974776-750x500.jpg",
                "\\images\\test\\1732892282500_iphone-16-pro-max-titan-den-3-638638961845387706-750x500.jpg",
                "\\images\\test\\1732892282503_iphone-16-pro-max-titan-den-8-638638961876642137-750x500.jpg",
                "\\images\\test\\1732892289338_iphone-16-pro-max-tem-99-638645210748646185-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("6749dca9c5dea13153e2f4f8"),
    name: "iPhone 16 Pro",
    brandName: "iPhone",
    description: "<p>Đẹp, xịn, phù hợp với người làm văn phòng, game thủ</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("8"),
    operatingSystem: "IOS",
    mainCamera: NumberInt("48"),
    selfieCamera: NumberInt("12"),
    batterySize: NumberInt("2700"),
    weight: NumberInt("199"),
    specifications: [
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("28990000"),
            colorVariant: [
                {
                    color: "titan sa mạc",
                    quantity: NumberInt("123")
                }
            ]
        },
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("31990000"),
            colorVariant: [
                {
                    color: "titan sa mạc",
                    quantity: NumberInt("20")
                },
                {
                    color: "titan tự nhiên",
                    quantity: NumberInt("10")
                }
            ]
        }
    ],
    variants: [
        {
            color: "titan sa mạc",
            images: [
                "\\images\\test\\1732893976423_iphone-16-pro-titan-sa-mac-2-638638979074194078-750x500.jpg",
                "\\images\\test\\1732893976428_iphone-16-pro-titan-sa-mac-3_0-638630295008893561-750x500.jpg",
                "\\images\\test\\1732893976431_iphone-16-pro-titan-sa-mac-3-638638979080345262-750x500.jpg",
                "\\images\\test\\1732893976438_iphone-16-pro-titan-sa-mac-8-638638979114770926-750x500.jpg",
                "\\images\\test\\1732893976420_iphone-16-pro-tem-99-638645188594717281-750x500.jpg"
            ]
        },
        {
            color: "titan tự nhiên",
            images: [
                "\\images\\test\\1732894000141_iphone-16-pro-titan-tu-nhien-2-638638980487068739-750x500.jpg",
                "\\images\\test\\1732894000144_iphone-16-pro-titan-tu-nhien-3-638638980492905949-750x500.jpg",
                "\\images\\test\\1732894000151_iphone-16-pro-titan-tu-nhien-4_0-638630296238795202-750x500.jpg",
                "\\images\\test\\1732894000138_iphone-16-pro-tem-99-638645189308437312-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("6749df03c5dea13153e2f4f9"),
    name: "Samsung Galaxy S24 Ultra",
    brandName: "Samsung",
    description: "<p>đẹp, sang trọng, vip, phù hợp với học sinh, sinh viên</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("12"),
    operatingSystem: "Android",
    mainCamera: NumberInt("50"),
    selfieCamera: NumberInt("12"),
    batterySize: NumberInt("4700"),
    weight: NumberInt("232"),
    specifications: [
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("24999000"),
            colorVariant: [
                {
                    color: "xám",
                    quantity: NumberInt("10")
                },
                {
                    color: "đen",
                    quantity: NumberInt("20")
                }
            ]
        },
        {
            internalMemory: NumberInt("512"),
            price: NumberInt("29490000"),
            colorVariant: [
                {
                    color: "tím",
                    quantity: NumberInt("25")
                },
                {
                    color: "đen",
                    quantity: NumberInt("15")
                }
            ]
        }
    ],
    variants: [
        {
            color: "xám",
            images: [
                "\\images\\test\\1732894489121_samsung-galaxy-s24-ultra-xam-5-750x500.jpg",
                "\\images\\test\\1732894489123_samsung-galaxy-s24-ultra-xam-6-750x500.jpg",
                "\\images\\test\\1732894489127_samsung-galaxy-s24-ultra-xam-7-750x500.jpg",
                "\\images\\test\\1732894489118_samsung-galaxy-s24-ultra-bbh-org.jpg",
                "\\images\\test\\1732894489111_samsung-galaxy-s24-ultra-15-1-750x500.jpg"
            ]
        },
        {
            color: "tím",
            images: [
                "\\images\\test\\1732894510277_samsung-galaxy-s24-ultra-tim-5-750x500.jpg",
                "\\images\\test\\1732894510280_samsung-galaxy-s24-ultra-tim-6-750x500.jpg",
                "\\images\\test\\1732894510284_samsung-galaxy-s24-ultra-tim-7-750x500.jpg",
                "\\images\\test\\1732894510286_samsung-galaxy-s24-ultra-tim-10-750x500.jpg",
                "\\images\\test\\1732894510275_samsung-galaxy-s24-ultra-bbh-org.jpg",
                "\\images\\test\\1732894510272_samsung-galaxy-s24-ultra-15-2-750x500.jpg"
            ]
        },
        {
            color: "đen",
            images: [
                "\\images\\test\\1732894527576_samsung-galaxy-s24-ultra-den-6-750x500.jpg",
                "\\images\\test\\1732894527578_samsung-galaxy-s24-ultra-den-7-750x500.jpg",
                "\\images\\test\\1732894527580_samsung-galaxy-s24-ultra-den-8-750x500.jpg",
                "\\images\\test\\1732894527570_samsung-galaxy-s24-ultra-bbh-org.jpg",
                "\\images\\test\\1732894527568_samsung-galaxy-s24-ultra-15-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("6749e15fc5dea13153e2f4fa"),
    name: "Samsung Galaxy A16",
    brandName: "Samsung",
    description: "<p>đẹp xịn</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("8"),
    operatingSystem: "Android",
    mainCamera: NumberInt("50"),
    selfieCamera: NumberInt("13"),
    batterySize: NumberInt("5000"),
    weight: NumberInt("192"),
    specifications: [
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("5890000"),
            colorVariant: [
                {
                    color: "Đen",
                    quantity: NumberInt("13")
                }
            ]
        },
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("6790000"),
            colorVariant: [
                {
                    color: "Vàng",
                    quantity: NumberInt("14")
                },
                {
                    color: "Xanh lá",
                    quantity: NumberInt("30")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Đen",
            images: [
                "\\images\\test\\1732895088830_samsung-galaxy-a16-5g-black-2-638652815447128349-750x500.jpg",
                "\\images\\test\\1732895088837_samsung-galaxy-a16-5g-black-4-638652815459729399-750x500.jpg",
                "\\images\\test\\1732895088845_samsung-galaxy-a16-5g-den-1-638678723736410484-750x500.jpg"
            ]
        },
        {
            color: "Vàng",
            images: [
                "\\images\\test\\1732895106351_samsung-galaxy-a16-5g-gold-3-638652812708018209-750x500.jpg",
                "\\images\\test\\1732895106354_samsung-galaxy-a16-5g-gold-4-638652812713096385-750x500.jpg",
                "\\images\\test\\1732895106357_samsung-galaxy-a16-5g-gold-5-638652812720296890-750x500.jpg",
                "\\images\\test\\1732895106361_samsung-galaxy-a16-5g-vang-1-638678723574552267-750x500.jpg"
            ]
        },
        {
            color: "Xanh lá",
            images: [
                "\\images\\test\\1732895122981_samsung-galaxy-a16-5g-green-2-638652815291906034-750x500.jpg",
                "\\images\\test\\1732895122983_samsung-galaxy-a16-5g-green-3-638652815297148576-750x500.jpg",
                "\\images\\test\\1732895122988_samsung-galaxy-a16-5g-green-4-638652815303302563-750x500.jpg",
                "\\images\\test\\1732895122991_samsung-galaxy-a16-green-1-638652802039966078-180x125.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("6749e28bc5dea13153e2f4fb"),
    name: "Xiaomi Redmi Note 13 Pro",
    brandName: "Xiaomi",
    description: "<p>Đẹp xịn</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("8"),
    operatingSystem: "Android",
    mainCamera: NumberInt("200"),
    selfieCamera: NumberInt("16"),
    batterySize: NumberInt("5000"),
    weight: NumberInt("188"),
    specifications: [
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("5790000"),
            colorVariant: [
                {
                    color: "Xanh lá",
                    quantity: NumberInt("13")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Xanh lá",
            images: [
                "\\images\\test\\1732895397841_redmi-note-13-pro-xanh-la-6-750x500.jpg",
                "\\images\\test\\1732895397844_redmi-note-13-pro-xanh-la-8-750x500.jpg",
                "\\images\\test\\1732895397847_redmi-note-13-pro-xanh-la-14-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("6749e43cc5dea13153e2f4fc"),
    name: "OPPO Reno12",
    brandName: "OPPO",
    description: "<p>oke víp</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("12"),
    operatingSystem: "Android",
    mainCamera: NumberInt("50"),
    selfieCamera: NumberInt("32"),
    batterySize: NumberInt("5000"),
    weight: NumberInt("177"),
    specifications: [
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("11690000"),
            colorVariant: [
                {
                    color: "Hồng",
                    quantity: NumberInt("20")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Hồng",
            images: [
                "\\images\\test\\1732895829365_oppo-reno12-5g-hong-1-750x500.jpg",
                "\\images\\test\\1732895829372_oppo-reno12-5g-hong-5-750x500.jpg",
                "\\images\\test\\1732895829376_oppo-reno12-5g-hong-8-750x500.jpg",
                "\\images\\test\\1732895829379_oppo-reno12-5g-tem-99-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("6749e513c5dea13153e2f4fd"),
    name: "Xiaomi Redmi Note 13",
    brandName: "Xiaomi ",
    description: "<p>Đẹp, rẻ</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("8"),
    operatingSystem: "Android",
    mainCamera: NumberInt("108"),
    selfieCamera: NumberInt("16"),
    batterySize: NumberInt("5000"),
    weight: NumberInt("188"),
    specifications: [
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("4390000"),
            colorVariant: [
                {
                    color: "đen",
                    quantity: NumberInt("12")
                },
                {
                    color: "Vàng",
                    quantity: NumberInt("32")
                }
            ]
        }
    ],
    variants: [
        {
            color: "đen",
            images: [
                "\\images\\test\\1732896397419_redmi-note-13-den-6-750x500.jpg",
                "\\images\\test\\1732896397423_redmi-note-13-den-7-750x500.jpg",
                "\\images\\test\\1732896397427_redmi-note-13-den-8-750x500.jpg"
            ]
        },
        {
            color: "Vàng",
            images: [
                "\\images\\test\\1732896416460_xiaomi-redmi-note-13-vang-6-750x500.jpg",
                "\\images\\test\\1732896416463_xiaomi-redmi-note-13-vang-7-750x500.jpg",
                "\\images\\test\\1732896416466_xiaomi-redmi-note-13-vang-9-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("6749e799c5dea13153e2f4fe"),
    name: "vivo V40 Lite",
    brandName: "vivo",
    description: "<p>Đẹp</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("8"),
    operatingSystem: "Android",
    mainCamera: NumberInt("50"),
    selfieCamera: NumberInt("32"),
    batterySize: NumberInt("5000"),
    weight: NumberInt("188"),
    specifications: [
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("7899000"),
            colorVariant: [
                {
                    color: "Bạc",
                    quantity: NumberInt("13")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Bạc",
            images: [
                "\\images\\test\\1732896683817_vivo-v40-lite-bac-6-638631652357187486-750x500.jpg",
                "\\images\\test\\1732896683821_vivo-v40-lite-bac-7-638631652362692985-750x500.jpg",
                "\\images\\test\\1732896683824_vivo-v40-lite-bac-8-638631652368452915-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a5fe206614768edd9c269"),
    name: "Xiaomi Redmi 13",
    brandName: "Xiaomi",
    description: "<p>đẹp, rẻ, phù hợp với học sinh sinh viên</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("8"),
    operatingSystem: "Android",
    mainCamera: NumberInt("108"),
    selfieCamera: NumberInt("13"),
    batterySize: NumberInt("5030"),
    weight: NumberInt("205"),
    specifications: [
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("3590000"),
            colorVariant: [
                {
                    color: "Đen",
                    quantity: NumberInt("20")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Đen",
            images: [
                "\\images\\test\\1732927486014_redmi-13-black-6-1-750x500.jpg",
                "\\images\\test\\1732927486031_redmi-13-black-8-1-750x500.jpg",
                "\\images\\test\\1732927486035_redmi-13-black-9-1-750x500.jpg",
                "\\images\\test\\1732927486038_redmi-13-black-7-1-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a61be06614768edd9c26a"),
    name: "OPPO A3x",
    brandName: "OPPO",
    description: "<p>đẹp, phù hợp với học sinh</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("4"),
    operatingSystem: "Android",
    mainCamera: NumberInt("8"),
    selfieCamera: NumberInt("5"),
    batterySize: NumberInt("5100"),
    weight: NumberInt("186"),
    specifications: [
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("3190000"),
            colorVariant: [
                {
                    color: "Đỏ",
                    quantity: NumberInt("15")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Đỏ",
            images: [
                "\\images\\test\\1732927953474_oppo-a3x-do-6-638611485975790367-750x500.jpg",
                "\\images\\test\\1732927953476_oppo-a3x-do-7-638611485983397226-750x500.jpg",
                "\\images\\test\\1732927953479_oppo-a3x-do-8-638611485992165499-750x500.jpg",
                "\\images\\test\\1732927953481_oppo-a3x-do-12-638611486018005057-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a633906614768edd9c26b"),
    name: "iPhone 12",
    brandName: "iPhone",
    description: "",
    isShow: true,
    status: "2",
    ram: NumberInt("4"),
    operatingSystem: "IOS",
    mainCamera: NumberInt("12"),
    selfieCamera: NumberInt("12"),
    batterySize: NumberInt("2815"),
    weight: NumberInt("164"),
    specifications: [
        {
            internalMemory: NumberInt("64"),
            price: NumberInt("11900000"),
            colorVariant: [
                {
                    color: "xanh lá",
                    quantity: NumberInt("12")
                },
                {
                    color: "Xanh dương",
                    quantity: NumberInt("14")
                }
            ]
        },
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("13890000"),
            colorVariant: [
                {
                    color: "xanh lá",
                    quantity: NumberInt("20")
                }
            ]
        }
    ],
    variants: [
        {
            color: "xanh lá",
            images: [
                "\\images\\test\\1732928530978_iphone-12-xanh-la-4-750x500.jpg",
                "\\images\\test\\1732928530997_iphone-12-xanh-la-6-750x500.jpg",
                "\\images\\test\\1732928530999_iphone-12-xanh-la-8-750x500.jpg",
                "\\images\\test\\1732928531001_iphone-12-xanh-la-9-750x500.jpg"
            ]
        },
        {
            color: "Xanh dương",
            images: [
                "\\images\\test\\1732928554771_iphone-12-xanh-duong-5-1-750x500.jpg",
                "\\images\\test\\1732928554791_iphone-12-xanh-duong-6-750x500.jpg",
                "\\images\\test\\1732928554794_iphone-12-xanh-duong-8-750x500.jpg",
                "\\images\\test\\1732928554797_iphone-12-xanh-duong-9-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a652e06614768edd9c26c"),
    name: "iPhone 13",
    brandName: "iPhone",
    description: "",
    isShow: true,
    status: "2",
    ram: NumberInt("4"),
    operatingSystem: "IOS",
    mainCamera: NumberInt("12"),
    selfieCamera: NumberInt("12"),
    batterySize: NumberInt("3240"),
    weight: NumberInt("173"),
    specifications: [
        {
            internalMemory: NumberInt("64"),
            price: NumberInt("14290000"),
            colorVariant: [
                {
                    color: "Hồng",
                    quantity: NumberInt("20")
                }
            ]
        },
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("16890000"),
            colorVariant: [
                {
                    color: "Hồng",
                    quantity: NumberInt("15")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Hồng",
            images: [
                "\\images\\test\\1732928858469_iphone-13-5-2-750x500.jpg",
                "\\images\\test\\1732928858472_iphone-13-6-2-750x500.jpg",
                "\\images\\test\\1732928858474_iphone-13-9-2-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a73ec76372d7a97838ced"),
    name: "iPhone 15",
    brandName: "iPhone",
    description: "<p>Iphone 15</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("6"),
    operatingSystem: "IOS",
    mainCamera: NumberInt("48"),
    selfieCamera: NumberInt("12"),
    batterySize: NumberInt("3349"),
    weight: NumberInt("171"),
    specifications: [
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("22990000"),
            colorVariant: [
                {
                    color: "Xanh lá nhạt",
                    quantity: NumberInt("12")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Xanh lá nhạt",
            images: [
                "\\images\\test\\1732932670894_iphone-15-256gb-xanh-la-3-750x500.jpg",
                "\\images\\test\\1732932670906_iphone-15-green-2-638629454743930665-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a756276372d7a97838cee"),
    name: "iPhone 14",
    brandName: "iPhone",
    description: "<p><span style=\"background-color: rgb(249, 250, 251); color: rgb(51, 51, 51);\">iPhone 14<span class=\"ql-cursor\">﻿</span></span></p>",
    isShow: true,
    status: "2",
    ram: NumberInt("6"),
    operatingSystem: "IOS",
    mainCamera: NumberInt("12"),
    selfieCamera: NumberInt("12"),
    batterySize: NumberInt("3279"),
    weight: NumberInt("172"),
    specifications: [
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("20590000"),
            colorVariant: [
                {
                    color: "Tím nhạt",
                    quantity: NumberInt("20")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Tím nhạt",
            images: [
                "\\images\\test\\1732932999129_iphone-14-tim-1-2-750x500.jpg",
                "\\images\\test\\1732932999131_iphone-14-tim-2-1-750x500.jpg",
                "\\images\\test\\1732932999135_iphone-14-tim-3-1-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a76f776372d7a97838cef"),
    name: "Samsung Galaxy S23 FE",
    brandName: "Samsung",
    description: "",
    isShow: true,
    status: "2",
    ram: NumberInt("8"),
    operatingSystem: "Android",
    mainCamera: NumberInt("50"),
    selfieCamera: NumberInt("10"),
    batterySize: NumberInt("4500"),
    weight: NumberInt("209"),
    specifications: [
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("9990000"),
            colorVariant: [
                {
                    color: "xanh mint",
                    quantity: NumberInt("23")
                }
            ]
        }
    ],
    variants: [
        {
            color: "xanh mint",
            images: [
                "\\images\\test\\1732933390244_samsung-galaxy-s23-fe-xanh-6-750x500.jpg",
                "\\images\\test\\1732933390247_samsung-galaxy-s23-fe-xanh-7-750x500.jpg",
                "\\images\\test\\1732933390249_samsung-galaxy-s23-fe-xanh-8-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a77df76372d7a97838cf0"),
    name: "Samsung Galaxy A06",
    brandName: "Samsung",
    description: "<p>Samsung Galaxy A06</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("4"),
    operatingSystem: "Android",
    mainCamera: NumberInt("50"),
    selfieCamera: NumberInt("12"),
    batterySize: NumberInt("5000"),
    weight: NumberInt("189"),
    specifications: [
        {
            internalMemory: NumberInt("64"),
            price: NumberInt("2690000"),
            colorVariant: [
                {
                    color: "Xanh dương nhạt",
                    quantity: NumberInt("12")
                }
            ]
        },
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("3490000"),
            colorVariant: [
                {
                    color: "Xanh dương nhạt",
                    quantity: NumberInt("20")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Xanh dương nhạt",
            images: [
                "\\images\\test\\1732933869577_samsung-galay-a06-xanh-duong-5-638618399471229815-750x500.jpg",
                "\\images\\test\\1732933869579_samsung-galay-a06-xanh-duong-6-638618399479083923-750x500.jpg",
                "\\images\\test\\1732933869597_samsung-galay-a06-xanh-duong-8-638618399491652545-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a7a7976372d7a97838cf1"),
    name: "vivo Y18",
    brandName: "vivo ",
    description: "<p>vivo Y18</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("4"),
    operatingSystem: "Android",
    mainCamera: NumberInt("50"),
    selfieCamera: NumberInt("8"),
    batterySize: NumberInt("5000"),
    weight: NumberInt("185"),
    specifications: [
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("3190000"),
            colorVariant: [
                {
                    color: "Trắng - xanh",
                    quantity: NumberInt("12")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Trắng - xanh",
            images: [
                "\\images\\test\\1732934287574_vivo-y18-trang-xanh-6-750x500.jpg",
                "\\images\\test\\1732934287577_vivo-y18-trang-xanh-7-750x500.jpg",
                "\\images\\test\\1732934287587_vivo-y18-trang-xanh-8-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a7b6976372d7a97838cf2"),
    name: "vivo V30e",
    brandName: "vivo",
    description: "<p>vivo V30e</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("12"),
    operatingSystem: "Android",
    mainCamera: NumberInt("50"),
    selfieCamera: NumberInt("32"),
    batterySize: NumberInt("5500"),
    weight: NumberInt("179"),
    specifications: [
        {
            internalMemory: NumberInt("256"),
            price: NumberInt("9990000"),
            colorVariant: [
                {
                    color: "nâu",
                    quantity: NumberInt("13")
                }
            ]
        }
    ],
    variants: [
        {
            color: "nâu",
            images: [
                "\\images\\test\\1732934543094_vivo-v30e-nau-do-6-750x500.jpg",
                "\\images\\test\\1732934543098_vivo-v30e-nau-do-7-750x500.jpg",
                "\\images\\test\\1732934543120_vivo-v30e-nau-do-8-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a7cdf76372d7a97838cf3"),
    name: "OPPO A18",
    brandName: "OPPO",
    description: "<p>OPPO A18</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("4"),
    operatingSystem: "Android",
    mainCamera: NumberInt("8"),
    selfieCamera: NumberInt("5"),
    batterySize: NumberInt("5000"),
    weight: NumberInt("188"),
    specifications: [
        {
            internalMemory: NumberInt("64"),
            price: NumberInt("3290000"),
            colorVariant: [
                {
                    color: "Xanh dương",
                    quantity: NumberInt("11")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Xanh dương",
            images: [
                "\\images\\test\\1732934907929_oppo-a18-xanh-64gb-5-750x500.jpg",
                "\\images\\test\\1732934907933_oppo-a18-xanh-64gb-7-750x500.jpg",
                "\\images\\test\\1732934907936_oppo-a18-xanh-64gb-8-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);
db.getCollection("product").insert([ {
    _id: ObjectId("674a7dc976372d7a97838cf4"),
    name: "OPPO A58",
    brandName: "OPPO",
    description: "<p>OPPO A58</p>",
    isShow: true,
    status: "2",
    ram: NumberInt("8"),
    operatingSystem: "Android",
    mainCamera: NumberInt("50"),
    selfieCamera: NumberInt("8"),
    batterySize: NumberInt("5000"),
    weight: NumberInt("192"),
    specifications: [
        {
            internalMemory: NumberInt("128"),
            price: NumberInt("5190000"),
            colorVariant: [
                {
                    color: "Xanh ngọc",
                    quantity: NumberInt("12")
                }
            ]
        }
    ],
    variants: [
        {
            color: "Xanh ngọc",
            images: [
                "\\images\\test\\1732935232281_oppo-a58-xanh-8gb-6-750x500.jpg",
                "\\images\\test\\1732935232284_oppo-a58-xanh-8gb-7-750x500.jpg",
                "\\images\\test\\1732935232302_oppo-a58-xanh-8gb-8-750x500.jpg"
            ]
        }
    ],
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.ProductCollection"
} ]);

// ----------------------------
// Collection structure for rating
// ----------------------------
db.getCollection("rating").drop();
db.createCollection("rating");

// ----------------------------
// Documents of rating
// ----------------------------
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a70"),
    userId: "674b13b50b750000c0002a07",
    username: "test5",
    productId: "6749e513c5dea13153e2f4fd",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a71"),
    userId: "674b13b50b750000c0002a13",
    username: "test17",
    productId: "6749e43cc5dea13153e2f4fc",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a72"),
    userId: "674b13b50b750000c0002a10",
    username: "test14",
    productId: "674a633906614768edd9c26b",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a73"),
    userId: "674b13b50b750000c0002a03",
    username: "test1",
    productId: "6749e799c5dea13153e2f4fe",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a74"),
    userId: "674b13b50b750000c0002a05",
    username: "test3",
    productId: "674a7cdf76372d7a97838cf3",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a75"),
    userId: "674b13b50b750000c0002a10",
    username: "test14",
    productId: "674a7b6976372d7a97838cf2",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a76"),
    userId: "674b13b50b750000c0002a08",
    username: "test6",
    productId: "6749ccccba94ad29ff5dc989",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a77"),
    userId: "674b13b50b750000c0002a11",
    username: "test15",
    productId: "674a7a7976372d7a97838cf1",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a78"),
    userId: "674b13b50b750000c0002a15",
    username: "test19",
    productId: "674a7cdf76372d7a97838cf3",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a79"),
    userId: "674b13b50b750000c0002a08",
    username: "test6",
    productId: "6749e43cc5dea13153e2f4fc",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a7a"),
    userId: "674b13b50b750000c0002a13",
    username: "test17",
    productId: "674a7a7976372d7a97838cf1",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a7b"),
    userId: "674b13b50b750000c0002a05",
    username: "test3",
    productId: "6749df03c5dea13153e2f4f9",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a7c"),
    userId: "674b13b50b750000c0002a05",
    username: "test3",
    productId: "6749e799c5dea13153e2f4fe",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a7d"),
    userId: "674b13b50b750000c0002a11",
    username: "test15",
    productId: "674a77df76372d7a97838cf0",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a7e"),
    userId: "674b13b50b750000c0002a04",
    username: "test2",
    productId: "6749e43cc5dea13153e2f4fc",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a7f"),
    userId: "674b13b50b750000c0002a0d",
    username: "test11",
    productId: "6749e43cc5dea13153e2f4fc",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a80"),
    userId: "674b13b50b750000c0002a0e",
    username: "test12",
    productId: "6749e799c5dea13153e2f4fe",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a81"),
    userId: "674b13b50b750000c0002a0c",
    username: "test10",
    productId: "674a77df76372d7a97838cf0",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a82"),
    userId: "674b13b50b750000c0002a0b",
    username: "test9",
    productId: "6749e15fc5dea13153e2f4fa",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a83"),
    userId: "674b13b50b750000c0002a13",
    username: "test17",
    productId: "6749e15fc5dea13153e2f4fa",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a84"),
    userId: "674b13b50b750000c0002a04",
    username: "test2",
    productId: "6749dca9c5dea13153e2f4f8",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a85"),
    userId: "674b13b50b750000c0002a05",
    username: "test3",
    productId: "6749e28bc5dea13153e2f4fb",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a86"),
    userId: "674b13b50b750000c0002a07",
    username: "test5",
    productId: "674a5fe206614768edd9c269",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a87"),
    userId: "674b13b50b750000c0002a14",
    username: "test18",
    productId: "674a633906614768edd9c26b",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a88"),
    userId: "674b13b50b750000c0002a0f",
    username: "test13",
    productId: "674a77df76372d7a97838cf0",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a89"),
    userId: "674b13b50b750000c0002a12",
    username: "test16",
    productId: "6749e15fc5dea13153e2f4fa",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a8a"),
    userId: "674b13b50b750000c0002a0d",
    username: "test11",
    productId: "674a77df76372d7a97838cf0",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a8b"),
    userId: "674b13b50b750000c0002a02",
    username: "test0",
    productId: "674a7a7976372d7a97838cf1",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a8c"),
    userId: "674b13b50b750000c0002a04",
    username: "test2",
    productId: "674a5fe206614768edd9c269",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a8d"),
    userId: "674b13b50b750000c0002a14",
    username: "test18",
    productId: "6749e513c5dea13153e2f4fd",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a8e"),
    userId: "674b13b50b750000c0002a06",
    username: "test4",
    productId: "674a756276372d7a97838cee",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a8f"),
    userId: "674b13b50b750000c0002a13",
    username: "test17",
    productId: "6749e799c5dea13153e2f4fe",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a90"),
    userId: "674b13b50b750000c0002a06",
    username: "test4",
    productId: "674a7dc976372d7a97838cf4",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a91"),
    userId: "674b13b50b750000c0002a14",
    username: "test18",
    productId: "6749ccccba94ad29ff5dc989",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a92"),
    userId: "674b13b50b750000c0002a02",
    username: "test0",
    productId: "674a756276372d7a97838cee",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a93"),
    userId: "674b13b50b750000c0002a11",
    username: "test15",
    productId: "674a73ec76372d7a97838ced",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a94"),
    userId: "674b13b50b750000c0002a07",
    username: "test5",
    productId: "6749e15fc5dea13153e2f4fa",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a95"),
    userId: "674b13b50b750000c0002a11",
    username: "test15",
    productId: "674a652e06614768edd9c26c",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a96"),
    userId: "674b13b50b750000c0002a0c",
    username: "test10",
    productId: "674a756276372d7a97838cee",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a97"),
    userId: "674b13b50b750000c0002a12",
    username: "test16",
    productId: "6749df03c5dea13153e2f4f9",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a98"),
    userId: "674b13b50b750000c0002a0f",
    username: "test13",
    productId: "674a7cdf76372d7a97838cf3",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a99"),
    userId: "674b13b50b750000c0002a0b",
    username: "test9",
    productId: "6749e799c5dea13153e2f4fe",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a9a"),
    userId: "674b13b50b750000c0002a13",
    username: "test17",
    productId: "6749df03c5dea13153e2f4f9",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a9b"),
    userId: "674b13b50b750000c0002a11",
    username: "test15",
    productId: "674a7b6976372d7a97838cf2",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a9c"),
    userId: "674b13b50b750000c0002a07",
    username: "test5",
    productId: "674a652e06614768edd9c26c",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a9d"),
    userId: "674b13b50b750000c0002a12",
    username: "test16",
    productId: "6749ccccba94ad29ff5dc989",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a9e"),
    userId: "674b13b50b750000c0002a05",
    username: "test3",
    productId: "674a7a7976372d7a97838cf1",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002a9f"),
    userId: "674b13b50b750000c0002a0b",
    username: "test9",
    productId: "674a76f776372d7a97838cef",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa0"),
    userId: "674b13b50b750000c0002a0b",
    username: "test9",
    productId: "674a756276372d7a97838cee",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa1"),
    userId: "674b13b50b750000c0002a13",
    username: "test17",
    productId: "674a73ec76372d7a97838ced",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa2"),
    userId: "674b13b50b750000c0002a0f",
    username: "test13",
    productId: "6749dca9c5dea13153e2f4f8",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa3"),
    userId: "674b13b50b750000c0002a0c",
    username: "test10",
    productId: "674a7a7976372d7a97838cf1",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa4"),
    userId: "674b13b50b750000c0002a14",
    username: "test18",
    productId: "6749df03c5dea13153e2f4f9",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa5"),
    userId: "674b13b50b750000c0002a0b",
    username: "test9",
    productId: "674a7dc976372d7a97838cf4",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa6"),
    userId: "674b13b50b750000c0002a05",
    username: "test3",
    productId: "6749e513c5dea13153e2f4fd",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa7"),
    userId: "674b13b50b750000c0002a12",
    username: "test16",
    productId: "6749dca9c5dea13153e2f4f8",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa8"),
    userId: "674b13b50b750000c0002a12",
    username: "test16",
    productId: "6749e799c5dea13153e2f4fe",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aa9"),
    userId: "674b13b50b750000c0002a08",
    username: "test6",
    productId: "674a7b6976372d7a97838cf2",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aaa"),
    userId: "674b13b50b750000c0002a10",
    username: "test14",
    productId: "674a7cdf76372d7a97838cf3",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aab"),
    userId: "674b13b50b750000c0002a08",
    username: "test6",
    productId: "6749df03c5dea13153e2f4f9",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aac"),
    userId: "674b13b50b750000c0002a03",
    username: "test1",
    productId: "6749df03c5dea13153e2f4f9",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aad"),
    userId: "674b13b50b750000c0002a0e",
    username: "test12",
    productId: "674a7b6976372d7a97838cf2",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aae"),
    userId: "674b13b50b750000c0002a14",
    username: "test18",
    productId: "674a5fe206614768edd9c269",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aaf"),
    userId: "674b13b50b750000c0002a0a",
    username: "test8",
    productId: "674a61be06614768edd9c26a",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab0"),
    userId: "674b13b50b750000c0002a03",
    username: "test1",
    productId: "674a7a7976372d7a97838cf1",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab1"),
    userId: "674b13b50b750000c0002a0b",
    username: "test9",
    productId: "6749e28bc5dea13153e2f4fb",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab2"),
    userId: "674b13b50b750000c0002a11",
    username: "test15",
    productId: "6749e43cc5dea13153e2f4fc",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab3"),
    userId: "674b13b50b750000c0002a14",
    username: "test18",
    productId: "674a76f776372d7a97838cef",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab4"),
    userId: "674b13b50b750000c0002a11",
    username: "test15",
    productId: "674a756276372d7a97838cee",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab5"),
    userId: "674b13b50b750000c0002a04",
    username: "test2",
    productId: "674a77df76372d7a97838cf0",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab6"),
    userId: "674b13b50b750000c0002a04",
    username: "test2",
    productId: "674a61be06614768edd9c26a",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab7"),
    userId: "674b13b50b750000c0002a03",
    username: "test1",
    productId: "674a7b6976372d7a97838cf2",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab8"),
    userId: "674b13b50b750000c0002a10",
    username: "test14",
    productId: "674a76f776372d7a97838cef",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ab9"),
    userId: "674b13b50b750000c0002a0a",
    username: "test8",
    productId: "6749df03c5dea13153e2f4f9",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aba"),
    userId: "674b13b50b750000c0002a0e",
    username: "test12",
    productId: "6749e15fc5dea13153e2f4fa",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002abb"),
    userId: "674b13b50b750000c0002a0c",
    username: "test10",
    productId: "674a5fe206614768edd9c269",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002abc"),
    userId: "674b13b50b750000c0002a15",
    username: "test19",
    productId: "674a5fe206614768edd9c269",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002abd"),
    userId: "674b13b50b750000c0002a0f",
    username: "test13",
    productId: "6749e513c5dea13153e2f4fd",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002abe"),
    userId: "674b13b50b750000c0002a0d",
    username: "test11",
    productId: "6749e28bc5dea13153e2f4fb",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002abf"),
    userId: "674b13b50b750000c0002a02",
    username: "test0",
    productId: "674a5fe206614768edd9c269",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac0"),
    userId: "674b13b50b750000c0002a09",
    username: "test7",
    productId: "6749df03c5dea13153e2f4f9",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac1"),
    userId: "674b13b50b750000c0002a13",
    username: "test17",
    productId: "674a756276372d7a97838cee",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac2"),
    userId: "674b13b50b750000c0002a13",
    username: "test17",
    productId: "6749ccccba94ad29ff5dc989",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac3"),
    userId: "674b13b50b750000c0002a08",
    username: "test6",
    productId: "674a7cdf76372d7a97838cf3",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac4"),
    userId: "674b13b50b750000c0002a08",
    username: "test6",
    productId: "674a652e06614768edd9c26c",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac5"),
    userId: "674b13b50b750000c0002a0a",
    username: "test8",
    productId: "674a73ec76372d7a97838ced",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac6"),
    userId: "674b13b50b750000c0002a14",
    username: "test18",
    productId: "674a652e06614768edd9c26c",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac7"),
    userId: "674b13b50b750000c0002a08",
    username: "test6",
    productId: "674a633906614768edd9c26b",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac8"),
    userId: "674b13b50b750000c0002a10",
    username: "test14",
    productId: "6749ccccba94ad29ff5dc989",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ac9"),
    userId: "674b13b50b750000c0002a0e",
    username: "test12",
    productId: "674a76f776372d7a97838cef",
    rating: 4,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002aca"),
    userId: "674b13b50b750000c0002a0d",
    username: "test11",
    productId: "674a7b6976372d7a97838cf2",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002acb"),
    userId: "674b13b50b750000c0002a09",
    username: "test7",
    productId: "6749dca9c5dea13153e2f4f8",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002acc"),
    userId: "674b13b50b750000c0002a14",
    username: "test18",
    productId: "674a77df76372d7a97838cf0",
    rating: 5,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002acd"),
    userId: "674b13b50b750000c0002a0e",
    username: "test12",
    productId: "674a61be06614768edd9c26a",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ace"),
    userId: "674b13b50b750000c0002a0c",
    username: "test10",
    productId: "6749e28bc5dea13153e2f4fb",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002acf"),
    userId: "674b13b50b750000c0002a07",
    username: "test5",
    productId: "674a633906614768edd9c26b",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ad0"),
    userId: "674b13b50b750000c0002a0f",
    username: "test13",
    productId: "674a633906614768edd9c26b",
    rating: 3,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ad1"),
    userId: "674b13b50b750000c0002a06",
    username: "test4",
    productId: "6749df03c5dea13153e2f4f9",
    rating: 2,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ad2"),
    userId: "674b13b50b750000c0002a15",
    username: "test19",
    productId: "674a756276372d7a97838cee",
    rating: 1,
    comment: "blabla"
} ]);
db.getCollection("rating").insert([ {
    _id: ObjectId("674b19230b750000c0002ad3"),
    userId: "674b13b50b750000c0002a0e",
    username: "test12",
    productId: "674a77df76372d7a97838cf0",
    rating: 1,
    comment: "blabla"
} ]);

// ----------------------------
// Collection structure for user
// ----------------------------
db.getCollection("user").drop();
db.createCollection("user");

// ----------------------------
// Documents of user
// ----------------------------
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a02"),
    name: "test0",
    email: "test0@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a03"),
    name: "test1",
    email: "test1@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a04"),
    name: "test2",
    email: "test2@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a05"),
    name: "test3",
    email: "test3@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a06"),
    name: "test4",
    email: "test4@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a07"),
    name: "test5",
    email: "test5@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a08"),
    name: "test6",
    email: "test6@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a09"),
    name: "test7",
    email: "test7@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a0a"),
    name: "test8",
    email: "test8@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a0b"),
    name: "test9",
    email: "test9@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a0c"),
    name: "test10",
    email: "test10@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a0d"),
    name: "test11",
    email: "test11@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a0e"),
    name: "test12",
    email: "test12@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a0f"),
    name: "test13",
    email: "test13@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a10"),
    name: "test14",
    email: "test14@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a11"),
    name: "test15",
    email: "test15@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a12"),
    name: "test16",
    email: "test16@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a13"),
    name: "test17",
    email: "test17@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a14"),
    name: "test18",
    email: "test18@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("674b13b50b750000c0002a15"),
    name: "test19",
    email: "test19@gmail.com",
    password: "$2a$10$Lw2BI1W7iIR5/6zMwREWEO6tPDqIYdICI.HQ8RSftE18ZzlzGkk3m",
    cart: [ ],
    status: "active",
    _class: "vn.id.vuductrieu.tlcn_be.entity.mongodb.UserCollection"
} ]);
