'use strict';
// /** @type {import('sequelize-cli').Migration} */

// {
//   productId: ,
//   url: "",
// },
// {
//   productId: ,
//   url: "",
// },
// {
//   productId: ,
//   url: "",
// },
// {
//   productId: ,
//   url: "",
// },
// {
//   productId: ,
//   url: "",
// },


const demoProductImages = [
  /********************** 1. Personal Care **********************/
  // toothpaste
  {
    productId: 1,
    url: "https://target.scene7.com/is/image/Target/GUEST_0e422303-42d3-4e6c-b267-b98687c85bee?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 1,
    url: "https://target.scene7.com/is/image/Target/GUEST_44219ab8-48aa-4f45-9c47-481033ebba22?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 1,
    url: "https://target.scene7.com/is/image/Target/GUEST_5f4bf78e-c709-4782-9c20-da6d5fe2934f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 1,
    url: "https://target.scene7.com/is/image/Target/GUEST_aa1e1aef-866e-413b-ad9a-a1187bae08e9?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 1,
    url: "https://target.scene7.com/is/image/Target/GUEST_e6dd5912-9685-49c5-96ed-af6e8eff8426?wid=725&hei=725&qlt=80&fmt=webp"
  },

  // face wash
  {
    productId: 2,
    url: "https://target.scene7.com/is/image/Target/GUEST_3fec72a7-32c9-49e4-a38d-156f71cef67b?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 2,
    url: "https://target.scene7.com/is/image/Target/GUEST_aaf1a73b-14b6-458c-8f61-24d8a763dc31?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 2,
    url: "https://target.scene7.com/is/image/Target/GUEST_6af1bb85-1884-4285-aa04-e199abcfb530?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 2,
    url: "https://target.scene7.com/is/image/Target/GUEST_fba49f17-23d0-4802-aa07-bdb0ca2549b4?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 2,
    url: "https://target.scene7.com/is/image/Target/GUEST_2e7d2e13-9bf8-4100-9059-1d9569b5eb94?wid=1000&hei=1000&qlt=80&fmt=webp",
  },

  // toner
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_c388ab2d-78a7-4f4f-848c-60ad469f0fc3?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_5db3e308-560d-4996-ab03-cd411fc50ebe?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_99e67263-cd68-4063-8067-af6fdb640ef5?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_5d3c6d46-5b45-4597-9703-a889e770105c?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_ace8d6a7-60bb-43f2-8278-07d9451ee665?wid=800&hei=800&qlt=80&fmt=webp",
  },

  // lotion
  {
    productId: 4,
    url: "https://target.scene7.com/is/image/Target/GUEST_037e8640-c468-4296-8c5c-c4fab8cac82a?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 4,
    url: "https://target.scene7.com/is/image/Target/GUEST_48fde037-7cfb-4b4c-81f4-e6e4d1d2387b?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 4,
    url: "https://target.scene7.com/is/image/Target/GUEST_9cf76786-c1a3-45c9-884d-a290b345c492?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 4,
    url: "https://target.scene7.com/is/image/Target/GUEST_43c73c47-e720-4b9a-a868-098adcf6d497?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 4,
    url: "https://target.scene7.com/is/image/Target/GUEST_da2510df-2ce2-4542-b649-0d41e596aec2?wid=800&hei=800&qlt=80&fmt=webp",
  },

  // solution
  {
    productId: 5,
    url: "https://target.scene7.com/is/image/Target/GUEST_bf5147ce-c5ab-4f81-9c0a-cb2886c3bb99?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 5,
    url: "https://target.scene7.com/is/image/Target/GUEST_90447e65-c771-40bd-8167-ac37dd186200?wid=725&hei=725&qlt=80&fmt=webp"
  },

  // softlips
  {
    productId: 6,
    url: "https://target.scene7.com/is/image/Target/GUEST_f6cb7704-e671-4fda-9d4f-89f082558b97?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 6,
    url: "https://target.scene7.com/is/image/Target/GUEST_95b591eb-9513-4b87-aab0-6067a82afb0a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 6,
    url: "https://target.scene7.com/is/image/Target/GUEST_1a108932-5fde-4dbf-a8fa-7cfdb103bd53?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 6,
    url: "https://target.scene7.com/is/image/Target/GUEST_a9b1f13a-7ab0-4851-a340-03a0fd7e25e6?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 6,
    url: "https://target.scene7.com/is/image/Target/GUEST_acdf22ff-e25c-4a66-a707-ea78a71a880f?wid=725&hei=725&qlt=80&fmt=webp"
  },

    // brows
  {
    productId: 7,
    url: "https://target.scene7.com/is/image/Target/GUEST_1864b593-45ba-419c-ab25-3a9dc1a102ca?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 7,
    url: "https://target.scene7.com/is/image/Target/GUEST_21b8ac0e-0fbd-49d2-863c-1dea3c749e6c?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 7,
    url: "https://target.scene7.com/is/image/Target/GUEST_86b32616-c68c-46e3-bcdb-eccfd7e7c1f3?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 7,
    url: "https://target.scene7.com/is/image/Target/GUEST_11961e97-2545-455a-88a5-44459b9439a6?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 7,
    url: "https://target.scene7.com/is/image/Target/GUEST_d905aa6a-7a12-47ed-a8b8-8262bb01a0b1?wid=800&hei=800&qlt=80&fmt=webp",
  },

  // razor
  {
    productId: 8,
    url: "https://target.scene7.com/is/image/Target/GUEST_daed0537-39e1-408e-b52a-a1115f7135e5?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 8,
    url: "https://target.scene7.com/is/image/Target/GUEST_abd68fad-9541-4cb1-b0f4-02c9f80a9a4b?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 8,
    url: "https://target.scene7.com/is/image/Target/GUEST_414bb1f5-1466-41bb-8611-11e070a567a7?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 8,
    url: "https://target.scene7.com/is/image/Target/GUEST_f70f6a00-cc07-40f6-9d4c-6d9d89cfa373?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 8,
    url: "https://target.scene7.com/is/image/Target/GUEST_658b4795-39e3-4dbb-aedb-2139311985a5?wid=800&hei=800&qlt=80&fmt=webp",
  },

  // cotton balls
  {
    productId: 9,
    url: "https://target.scene7.com/is/image/Target/GUEST_f1e4a4d9-17f1-494e-968f-c10d16d10e7b?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 9,
    url: "https://target.scene7.com/is/image/Target/GUEST_88486ab7-b156-47a8-84e3-77a502a9b151?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 9,
    url: "https://target.scene7.com/is/image/Target/GUEST_30931cf7-91e5-4fcf-b54e-66b5b4983515?wid=725&hei=725&qlt=80&fmt=webp"
  },


  // kleenex
  {
    productId: 10,
    url: "https://target.scene7.com/is/image/Target/GUEST_f9fbc7ae-b3dc-4e87-8814-62e602d61226?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 10,
    url: "https://target.scene7.com/is/image/Target/GUEST_4e938f1c-2997-452d-8d6a-960321878f74?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 10,
    url: "https://target.scene7.com/is/image/Target/GUEST_38aaac79-a7b2-49e8-9a2f-0892bdfb953d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 10,
    url: "https://target.scene7.com/is/image/Target/GUEST_f2412a2a-1b7c-4730-ba86-5100cc900020?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // ibuprofen
  {
    productId: 11,
    url: "https://target.scene7.com/is/image/Target/GUEST_112e8e85-82b0-45e8-8fb0-98641c015a64?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 11,
    url: "https://target.scene7.com/is/image/Target/GUEST_c458b3ea-f5d9-46fc-adbf-701057845a21?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 11,
    url: "https://target.scene7.com/is/image/Target/GUEST_3dea7e40-0d6f-4df4-86f2-c85bd6df6f57?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 11,
    url: "https://target.scene7.com/is/image/Target/GUEST_e8dcc799-b2a9-48c0-b6c1-21bb3cb6ad81?wid=725&hei=725&qlt=80&fmt=webp"
  },

  // first aid
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_c8acf66e-7edf-4b51-9a2b-5d607ebd8241?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_b613c57b-bb71-4418-8abe-9466d0849bc4?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_c184fd71-8e98-489a-a529-03086c1c1e2c?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_49f90db1-1bcd-43ee-9776-7a2cf93d6665?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_020c9e8d-eb50-453c-9d48-9fcda00816f3?wid=800&hei=800&qlt=80&fmt=webp",
  },

  /********************** 2. Home **********************/
  // gloves
  {
    productId: 13,
    url: "https://target.scene7.com/is/image/Target/GUEST_b39f22ca-3923-4667-913e-15b985f3e2ec?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 13,
    url: "https://target.scene7.com/is/image/Target/GUEST_49ad8081-0c5a-4a65-ab3d-cef81e150db3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 13,
    url: "https://target.scene7.com/is/image/Target/GUEST_790147c6-1aed-4c61-907d-90698ef8bf2c?wid=725&hei=725&qlt=80&fmt=webp"
  },

  // cleaner
  {
    productId: 14,
    url: "https://target.scene7.com/is/image/Target/GUEST_8728479b-d46d-41f2-b958-507ff4380cc0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 14,
    url: "https://target.scene7.com/is/image/Target/GUEST_2f7cb496-367d-4c67-92dc-2dc2b6ecdc7d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 14,
    url: "https://target.scene7.com/is/image/Target/GUEST_068a0975-6957-4ce1-87df-1ebd2cbfbffb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // trash liner
  {
    productId: 15,
    url: "https://target.scene7.com/is/image/Target/GUEST_6da9be1c-8f12-419b-9480-737f58bc8daf?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 15,
    url: "https://target.scene7.com/is/image/Target/GUEST_1fa1c0b2-426b-4b79-9854-82dd1b9fdb58?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 15,
    url: "https://target.scene7.com/is/image/Target/GUEST_9ccc0ccb-8a96-44e0-8240-aa7f5a6f331d?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // swiffer
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_cbec208a-7db1-462c-bf48-666a9c6a0b35?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_983c2adf-8878-46f7-bb5e-c0a3c649592c?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_2289a499-cdd2-46f0-8cae-1fe890bcb492?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_7fcb5d6a-0724-4834-97fe-e97ef0258051?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_c25cb742-7547-4f41-81ae-f34f7f3beaf1?wid=800&hei=800&qlt=80&fmt=webp",
  },

  // detergent
  {
    productId: 17,
    url: "https://target.scene7.com/is/image/Target/GUEST_2e783c94-55b1-4240-b337-fb7f34b78685?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 17,
    url: "https://target.scene7.com/is/image/Target/GUEST_8b4591a1-b57d-4f61-91ad-10b0a0f08914?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 17,
    url: "https://target.scene7.com/is/image/Target/GUEST_18489b6e-5615-4e29-816e-b68c46ab87f2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 9,
    url: "https://target.scene7.com/is/image/Target/GUEST_6e0ab8e1-8dc4-4f12-a00e-40665013b9fb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 17,
    url: "https://target.scene7.com/is/image/Target/GUEST_daf2b89c-54b0-444a-96d7-8aed860f19a0?wid=725&hei=725&qlt=80&fmt=webp"
  },

  // hangers
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_f9f5f0e5-d7e3-4e98-97da-7fb68601b76a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_acbe6ed8-dbea-4f9f-a7ca-24ec49f4934a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_5ac2e286-1e3a-4f8e-be44-2216acbbd05a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_ded69ed1-1ae4-453e-b2af-a3ff1cfa0613?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_6fdffac5-a10d-4474-b637-a9c3e58c10a1?wid=725&hei=725&qlt=80&fmt=webp"
  },

  // bath towel
  {
    productId: 19,
    url: "https://target.scene7.com/is/image/Target/GUEST_4df85331-3783-44ed-97ad-8c8fc3b933e0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 19,
    url: "https://target.scene7.com/is/image/Target/GUEST_7f6cf0a6-aa79-4ddf-a682-4ab1686d7907?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 19,
    url: "https://target.scene7.com/is/image/Target/GUEST_8480b43d-5158-4c07-895a-2a9a72fdf900?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 19,
    url: "https://target.scene7.com/is/image/Target/GUEST_9f3fa3a4-da13-4084-8cf9-2956108918e1?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // pillow
  {
    productId: 20,
    url: "https://target.scene7.com/is/image/Target/GUEST_b6d79581-e98b-4ab8-a104-a2355a1c00b0?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 20,
    url: "https://target.scene7.com/is/image/Target/GUEST_78ce2e2d-8ee6-4f59-ab5c-19f12efb4b48?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 20,
    url: "https://target.scene7.com/is/image/Target/GUEST_b0ea3aaa-4782-4487-ae5b-b987c12441d0?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 20,
    url: "https://target.scene7.com/is/image/Target/GUEST_e5336e83-7e2a-446b-b52f-2783662bed77?wid=800&hei=800&qlt=80&fmt=webp",
  },
  //  steamer
  {
    productId: 21,
    url: "https://target.scene7.com/is/image/Target/GUEST_7a834a86-f9f9-4538-8c1b-4b8e3969d890?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 21,
    url: "https://target.scene7.com/is/image/Target/GUEST_5e537710-99e1-473b-b8a7-7c3d120b8a80?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 21,
    url: "https://target.scene7.com/is/image/Target/GUEST_7d6a2f2c-d202-40e5-bb6a-6d253445d32c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 21,
    url: "https://target.scene7.com/is/image/Target/GUEST_97fc6da7-5373-45ff-ad1e-734318525a3a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 21,
    url: "https://target.scene7.com/is/image/Target/GUEST_99c37297-31ba-402b-9ded-e50c10584c70?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // candle
  {
    productId: 22,
    url: "https://target.scene7.com/is/image/Target/GUEST_d8ea166a-d359-4fd2-b221-edc12c9f0c0b?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 22,
    url: "https://target.scene7.com/is/image/Target/GUEST_11850877-8577-406f-9f9f-3c202c3a9fad?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 22,
    url: "https://target.scene7.com/is/image/Target/GUEST_98a3da72-1c99-4407-8198-24e3f3eb2035?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // command strips
  {
    productId: 23,
    url: "https://target.scene7.com/is/image/Target/GUEST_b98d9d66-51c2-46fa-8b35-cd246e3417a8?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 23,
    url: "https://target.scene7.com/is/image/Target/GUEST_d38143c3-27bb-49cb-8643-3ddbfd13283b?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 23,
    url: "https://target.scene7.com/is/image/Target/GUEST_06417e55-4d5d-448f-a354-c0e5d9e69bb7?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 23,
    url: "https://target.scene7.com/is/image/Target/GUEST_4608e8a1-db8f-49a6-afc5-9b0b8fcbea78?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 23,
    url: "https://target.scene7.com/is/image/Target/GUEST_98623eeb-9661-487e-9ed0-992a0bd012ae?wid=800&hei=800&qlt=80&fmt=webp",
  },

  // tools
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_95eef5b2-ca49-4e67-a5c6-fcb86f9236d0?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_bb24a02f-b9c8-4e13-adb8-1769cfa114fd?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_70dd435c-b470-4e4d-9c0a-77a4ac124ba7?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_c74df33b-1c2c-408c-9992-f2bc9fbd1516?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_71ff5e78-2e09-4f74-a3a8-1b6508af4b2a?wid=800&hei=800&qlt=80&fmt=webp",
  },

  /********************** 3. Kitchen & Dining **********************/
  // flatware
  {
    productId: 25,
    url: "https://target.scene7.com/is/image/Target/GUEST_c2a26b2d-95b5-408b-8db9-82ffad756a52?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 25,
    url: "https://target.scene7.com/is/image/Target/GUEST_df122eef-ee94-441f-95c7-b3895783d707?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // dinnerware
  {
    productId: 26,
    url: "https://target.scene7.com/is/image/Target/GUEST_2af8fa43-3ce8-409b-9096-4976ac0d1699?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 26,
    url: "https://target.scene7.com/is/image/Target/GUEST_635f39b2-7332-477f-98e5-8207c6f15855?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 26,
    url: "https://target.scene7.com/is/image/Target/GUEST_4420bd45-19e2-462f-9f50-1da4ac8027e1?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 26,
    url: "https://target.scene7.com/is/image/Target/GUEST_46f3d622-c7c7-4591-9786-04bfd80e0af1?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 26,
    url: "https://target.scene7.com/is/image/Target/GUEST_bf7b6a4c-96e3-4f9c-96c6-e68f5bdb2ea6?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // glasses
  {
    productId: 27,
    url: "https://target.scene7.com/is/image/Target/GUEST_d55fe317-44a2-4364-8027-e0cc747c36fe?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 27,
    url: "https://target.scene7.com/is/image/Target/GUEST_6cf0cdbd-d832-41a4-b8c3-cdb3e788832a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 27,
    url: "https://target.scene7.com/is/image/Target/GUEST_8aab4f41-14ad-47fc-a610-0c5ba5aac16a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 27,
    url: "https://target.scene7.com/is/image/Target/GUEST_75921996-d0ec-44ad-857e-f11d48e3df32?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 27,
    url: "https://target.scene7.com/is/image/Target/GUEST_3eacec31-1667-4d22-801a-bfc0469bfd5c?wid=725&hei=725&qlt=80&fmt=webp"
  },

  // knives
  {
    productId: 28,
    url: "https://target.scene7.com/is/image/Target/GUEST_95b3f12b-48b4-49d1-8090-986d554e4460?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 28,
    url: "https://target.scene7.com/is/image/Target/GUEST_46460385-371d-442e-a8ae-a332b68c6a42?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 28,
    url: "https://target.scene7.com/is/image/Target/GUEST_f9cac995-bd98-43f9-bb9f-44f3f4ab71eb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 28,
    url: "https://target.scene7.com/is/image/Target/GUEST_9ef5f9ee-d2c4-4db4-870b-d34b21846a95?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 28,
    url: "https://target.scene7.com/is/image/Target/GUEST_f5b53685-6f4d-478c-b22c-30beb9466968?wid=725&hei=725&qlt=80&fmt=webp"
  },

  // grilling set
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_503f7ece-12e5-47ed-aaf8-43f58c8a878e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_ec5d6992-b1a6-42cc-b52a-d9df095418c8?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_120416b6-7e73-4c84-b4ee-d51a09e09918?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_194686fa-068c-488c-acb4-43a30ada2041?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_1a9f6dfe-2cc5-4271-85b5-c771aa2d5bb7?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // baking sheets
  {
    productId: 30,
    url: "https://target.scene7.com/is/image/Target/GUEST_382c402f-d3ed-4d30-bbcd-caa056637306?wid=800&hei=800&qlt=80&fmt=webp"
  },
  {
    productId: 30,
    url: "https://target.scene7.com/is/image/Target/GUEST_71d035f1-168b-4337-be14-16f6f66afb82?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 30,
    url: "https://target.scene7.com/is/image/Target/GUEST_a177390a-cecf-4eb9-814d-2c71c29fdbd6?wid=800&hei=800&qlt=80&fmt=webp",

  },
  {
    productId: 30,
    url: "https://target.scene7.com/is/image/Target/GUEST_57e82a14-7df0-41e1-88d5-af9d8efbbbd4?wid=800&hei=800&qlt=80&fmt=webp",

  },
  {
    productId: 30,
    url: "https://target.scene7.com/is/image/Target/GUEST_d6146240-50af-48c7-aa37-844fc92b2d9c?wid=800&hei=800&qlt=80&fmt=webp",

  },

  // tupperware
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_e28debdd-f8d3-4a7a-95ed-e8d91c44567a?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_181869ee-6567-4b29-8952-209ad5ecc25a?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_a60a98ac-1941-4b92-8297-c92f54496b79?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_83482ace-4d54-4e02-9d51-e090bbfe7fff?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_ac9da363-27f0-4946-9feb-66adbb1d0586?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // measuring cup
  {
    productId: 32,
    url: "https://target.scene7.com/is/image/Target/GUEST_bf938d47-967e-4afa-a529-2d82110d6d8b?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 32,
    url: "https://target.scene7.com/is/image/Target/GUEST_230a37bf-fa63-4866-b26c-ee8734240005?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 32,
    url: "https://target.scene7.com/is/image/Target/GUEST_2c479fe7-d3bb-4b44-9250-7a0dab1f53b4?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 32,
    url: "https://target.scene7.com/is/image/Target/GUEST_f5ad9e44-659f-467d-8349-dd33fe871ef2?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // kettle
  {
    productId: 33,
    url: "https://target.scene7.com/is/image/Target/GUEST_48a0aec9-8c31-4a6e-aba2-664cec13cfe9?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 33,
    url: "https://target.scene7.com/is/image/Target/GUEST_461a3879-3013-4777-8fe7-76262a5b2f1c?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // oven
  {
    productId: 34,
    url: "https://target.scene7.com/is/image/Target/GUEST_13bfac06-8fd0-479f-8eeb-aa45c4ded987?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 34,
    url: "https://target.scene7.com/is/image/Target/GUEST_a63f75a7-0633-478e-8e65-c7c49fa1119c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 34,
    url: "https://target.scene7.com/is/image/Target/GUEST_9febda15-126a-47e8-8407-8535b3b1a199?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 34,
    url: "https://target.scene7.com/is/image/Target/GUEST_5c3132c2-39da-43e1-b7bf-7cd82557d8d4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 34,
    url: "https://target.scene7.com/is/image/Target/GUEST_c6e1d46f-9ff1-42e0-843b-2b4c09039f8f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // cookware
  {
    productId: 35,
    url: "https://target.scene7.com/is/image/Target/GUEST_c70deef0-45f1-4012-aec2-b0c208fa4f1f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 35,
    url: "https://target.scene7.com/is/image/Target/GUEST_4066db4c-60e4-4054-a30e-79de7a705f2a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 35,
    url: "https://target.scene7.com/is/image/Target/GUEST_5c7d8556-b5b1-4790-b3db-914de5772d46?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 35,
    url: "https://target.scene7.com/is/image/Target/GUEST_985fcfb2-c106-4fff-b19c-cfb84d3e1021?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // cookbook
  {
    productId: 36,
    url: "https://target.scene7.com/is/image/Target/GUEST_4dd108f7-ee95-48f4-a222-eab3383b4c05?wid=800&hei=800&qlt=80&fmt=webp",
  },

  /********************** 4. Grocery **********************/
  // eggs
  {
    productId: 37,
    url: "https://target.scene7.com/is/image/Target/GUEST_393a7c9a-e12f-4983-8f4a-e58100a6192d?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 37,
    url: "https://target.scene7.com/is/image/Target/GUEST_7f6b7e86-a1a9-42de-8ecd-daa962918f23?wid=1000&hei=1000&qlt=80&fmt=webp"
  },
  // bread
  {
    productId: 38,
    url: "https://target.scene7.com/is/image/Target/GUEST_29132c2d-a484-40d1-ab91-99e94b42570b?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 38,
    url: "https://target.scene7.com/is/image/Target/GUEST_6e3410ff-759f-490f-bdd2-37e03996658a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 38,
    url: "https://target.scene7.com/is/image/Target/GUEST_b50a4730-d5f4-44b1-8a73-0542e692783a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // rice
  {
    productId: 39,
    url: "https://target.scene7.com/is/image/Target/GUEST_fa21f166-ea81-413f-8689-37a717b50eb9?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 39,
    url: "https://target.scene7.com/is/image/Target/GUEST_a609b627-d64f-4979-a563-398e23ab3ba8?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 39,
    url: "https://target.scene7.com/is/image/Target/GUEST_b656a926-bfe1-4ecf-878e-2bddf3560697?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // butter
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_bc1c55a1-5f39-4570-a82c-f4eb8fbb5369?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_c0be3464-e4a6-41b3-9aa5-882a32dc2e93?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_433678d9-ffdd-4475-91ba-b619e9461e78?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_0dea9e4c-2896-4354-ae4e-d5b7553445b6?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_4d614652-079c-48ec-9c83-1afddd645866?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // sriracha
  {
    productId: 41,
    url: "https://target.scene7.com/is/image/Target/GUEST_f96d46a0-42c1-432a-aac7-bfbfea7a2b6a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 41,
    url: "https://target.scene7.com/is/image/Target/GUEST_eadcf8a9-3a0e-4714-87b8-46131dc7afde?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 41,
    url: "https://www.target.com/p/huy-fong-sriracha-chili-sauce-28oz/-/A-15195477#lnk=sametab",
  },
  // Nutella
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_181498a0-07c9-4e17-9da7-fca5fa6502e5?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_516fb00c-edc1-4535-97f7-cf53809e9461?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_766b0667-5517-4556-b810-a92041abdea2?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_2413c6d1-74f5-426e-995d-beb9cf1c0625?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_cdcb810e-0d73-46e8-9b86-adbb2f28d13c?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // Ritter Sport
  {
    productId: 43,
    url: "https://target.scene7.com/is/image/Target/GUEST_b8b5ae9f-39d5-4f84-854b-51863c9affa5?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 43,
    url: "https://target.scene7.com/is/image/Target/GUEST_45640aec-c180-44bc-a960-31bf477f0374?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 43,
    url: "https://target.scene7.com/is/image/Target/GUEST_78ea15a7-edf1-4c41-bc12-6a54c0ae0974?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 43,
    url: "https://target.scene7.com/is/image/Target/GUEST_5b0ad6c1-541c-4b7f-aba0-9a0010e6dbdb?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // donuts
  {
    productId: 44,
    url: "https://target.scene7.com/is/image/Target/GUEST_56eb871e-f7bc-4816-a7c0-ed2d40476322?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 44,
    url: "https://target.scene7.com/is/image/Target/GUEST_16174faa-8c7f-41e9-aedc-92db5abc52b5?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 44,
    url: "https://target.scene7.com/is/image/Target/GUEST_6aa080a3-0003-4089-a57d-6ae123e0cc85?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // ice cream
  {
    productId: 45,
    url: "https://target.scene7.com/is/image/Target/GUEST_1ba11e1d-e8da-4e92-9c38-35edde29f34e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 45,
    url: "https://target.scene7.com/is/image/Target/GUEST_2baec4f2-fce0-4e12-95a0-afcfcdd03a11?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 45,
    url: "https://target.scene7.com/is/image/Target/GUEST_93a7971f-55d4-449a-9557-8f33a7dc346f?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 45,
    url: "https://target.scene7.com/is/image/Target/GUEST_6448998b-19fd-4fc1-87d0-75d2c2e0bf1b?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // orange juice
  {
    productId: 46,
    url: "https://target.scene7.com/is/image/Target/GUEST_aaae82e7-fb81-434a-8c47-1e449b639cd0?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 46,
    url: "https://target.scene7.com/is/image/Target/GUEST_b77c3058-2563-4480-97af-9ebef5ca5aa3?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 46,
    url: "https://target.scene7.com/is/image/Target/GUEST_b92ff81d-3340-4cb7-acf0-ab31bec2797d?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 46,
    url: "https://target.scene7.com/is/image/Target/GUEST_4b65003c-d468-4efe-9e96-26263e903736?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // soymilk
  {
    productId: 47,
    url: "https://target.scene7.com/is/image/Target/GUEST_f4c46d35-0248-49fc-953f-871ff436c0f3?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 47,
    url: "https://target.scene7.com/is/image/Target/GUEST_f88d7173-f120-4c18-a42d-133112a018ac?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 47,
    url: "https://target.scene7.com/is/image/Target/GUEST_dce65f81-89fe-4b9b-bc7c-220a13cfa267?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 47,
    url: "https://target.scene7.com/is/image/Target/GUEST_e6031c81-2613-456d-b6a1-e388e92daa51?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 47,
    url: "https://target.scene7.com/is/image/Target/GUEST_d67f0991-74ee-4a97-ad0c-1f6954af680a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // Meiomi
  {
    productId: 48,
    url: "https://target.scene7.com/is/image/Target/GUEST_81669d0e-aedf-47a7-8813-5c5cdc40308e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 48,
    url: "https://target.scene7.com/is/image/Target/GUEST_28af7083-5a57-470f-a18e-5743265c20ee?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 48,
    url: "https://target.scene7.com/is/image/Target/GUEST_7ea6dbc3-be93-4cf3-b4a2-a0b8b88c4a86?wid=1000&hei=1000&qlt=80&fmt=webp",
  },

  /********************** 5. Electronics **********************/
  // tv
  {
    productId: 49,
    url: "https://target.scene7.com/is/image/Target/GUEST_3a93aab9-b48f-46b8-b60c-96884d75a6a1?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 49,
    url: "https://target.scene7.com/is/image/Target/GUEST_72410128-cfb1-432e-88ea-5ab13e717599?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 49,
    url: "https://target.scene7.com/is/image/Target/GUEST_924104f8-5c07-4a02-92de-3b9871dfc645?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 49,
    url: "https://target.scene7.com/is/image/Target/GUEST_b633410b-c27d-496d-ac9b-a71811d78df5?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 49,
    url: "https://target.scene7.com/is/image/Target/GUEST_5e9b4480-bff4-4d2c-b9a2-0728df5d30b0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // iPad 5th Generation
  // {
  //   productId: 50,
  //   url: "https://target.scene7.com/is/image/Target/GUEST_18310cef-f08e-4e8c-9db0-2590f8b84993?wid=725&hei=725&qlt=80&fmt=webp"
  // },
  // {
  //   productId: 50,
  //   url: "https://target.scene7.com/is/image/Target/GUEST_dd59e86f-a518-4a99-9cca-345b9a9dd0a2?wid=725&hei=725&qlt=80&fmt=webp"
  // },
  // {
  //   productId: 50,
  //   url: "https://target.scene7.com/is/image/Target/GUEST_21440fa5-7299-42ba-b407-877e3cc67633?wid=725&hei=725&qlt=80&fmt=webp"
  // },
  // {
  //   productId: 50,
  //   url: "https://target.scene7.com/is/image/Target/GUEST_1622d248-e46e-4aee-8bf6-5a92ebc36c25?wid=725&hei=725&qlt=80&fmt=webp"
  // },
  // {
  //   productId: 50,
  //   url: "https://target.scene7.com/is/image/Target/GUEST_7832fadf-82ae-4476-b362-f57482357ec8?wid=725&hei=725&qlt=80&fmt=webp"
  // },
  // iPad 6th Generation
  {
    productId: 50,
    url: "https://target.scene7.com/is/image/Target/GUEST_6fde87de-b053-463b-91ec-1a7d0d8e6be2?wid=800&hei=800&qlt=80&fmt=webp"
  },
  {
    productId: 50,
    url: "https://target.scene7.com/is/image/Target/GUEST_4fa37fdb-fbae-449e-9784-6509abe88d8f?wid=800&hei=800&qlt=80&fmt=webp"
  },
  {
    productId: 50,
    url: "https://target.scene7.com/is/image/Target/GUEST_88357e60-50ba-4f4c-bf4c-08383b161772?wid=800&hei=800&qlt=80&fmt=webp"
  },
  {
    productId: 50,
    url: "https://target.scene7.com/is/image/Target/GUEST_fd20ac5f-8a79-4ec1-9ff7-657b122ba0de?wid=800&hei=800&qlt=80&fmt=webp"
  },
  {
    productId: 50,
    url: "https://target.scene7.com/is/image/Target/GUEST_d4b8a135-0453-4b83-960e-3af941f7ec61?wid=800&hei=800&qlt=80&fmt=webp"
  },
  // airpods
  {
    productId: 51,
    url: "https://target.scene7.com/is/image/Target/GUEST_d481ae28-76cf-45fc-a28b-0dca314d449c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 51,
    url: "https://target.scene7.com/is/image/Target/GUEST_6b120943-a30a-4f67-86ad-c68e8f6a6263?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 51,
    url: "https://target.scene7.com/is/image/Target/GUEST_dfd1cf3d-6a14-47cb-8de7-eac25ffa938c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 51,
    url: "https://target.scene7.com/is/image/Target/GUEST_cc8ca1c1-47c0-4c8f-8599-f2c88105e368?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 51,
    url: "https://target.scene7.com/is/image/Target/GUEST_15cd26e7-ef1e-4932-9e94-570420e5529e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // HomePod
  {
    productId: 52,
    url: "https://target.scene7.com/is/image/Target/GUEST_12befb49-d746-4a15-96a7-1c733535b714?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 52,
    url: "https://target.scene7.com/is/image/Target/GUEST_6733c910-42e6-4e86-847b-4bee6af60495?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 52,
    url: "https://target.scene7.com/is/image/Target/GUEST_5b02c92e-4fba-4baa-b286-fe9368b9e5dd?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 52,
    url: "https://target.scene7.com/is/image/Target/GUEST_2ec72129-7e62-4b9d-b5c7-5cb201a208e4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // Charger
  {
    productId: 53,
    url: "https://target.scene7.com/is/image/Target/GUEST_d45ab87e-587f-4133-a13d-6d68eda50aea?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 53,
    url: "https://target.scene7.com/is/image/Target/GUEST_608d1570-754e-4283-9bd9-888a24bce454?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 53,
    url: "https://target.scene7.com/is/image/Target/GUEST_5b66e271-090e-4861-9a09-1bb56c7b8c0b?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // HDMI
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_b1366b49-50ad-4022-a44b-09062aabaa1b?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_57f44afb-5c02-49d0-b70f-5a527b1e548c?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_c3d722d3-4f98-4203-9fe3-62c8fb2714d1?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_8015a793-c8da-4d83-978d-0061beb46998?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_de01e447-948d-4cc2-9dc2-1c88ed21f133?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // Battery
  {
    productId: 55,
    url: "https://target.scene7.com/is/image/Target/GUEST_fe1e59c1-192a-42bc-a9e9-72b4819a5798?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 55,
    url: "https://target.scene7.com/is/image/Target/GUEST_0f3b32bd-60a6-4b12-a61e-7c15c7a4bc71?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // polaroid
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_524f0ca9-7fa9-4917-9e4b-d3b18b4beb5a?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_6cb2096c-924b-4bcd-98a8-fc9e736c2312?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_8374d015-ce5e-402d-8eda-545e2ef9c1e7?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_35d4dbbf-2844-44f8-b3af-c1bf2e84162b?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_757ca630-ceb9-4cfc-aa02-e5b94004c1f9?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // webcam
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_9e85f26e-2acd-4ea3-8515-67ce98eb3fa5?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_8c0ac985-6d8b-4b28-9a26-14d654cbbab8?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_4c6f3a6c-582e-4657-879d-cf1a6379199d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_c69055f4-4a0d-4642-989b-9db9ee4a5034?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_8304d3d3-fad5-4049-8641-a98ac9a04638?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // surveillance camera
  {
    productId: 58,
    url: "https://target.scene7.com/is/image/Target/GUEST_d9fc9dc7-55b9-4296-9f11-b00b2cb03b43?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 58,
    url: "https://target.scene7.com/is/image/Target/GUEST_b7400fb3-e7a8-40a6-942d-57ca5453c5c2?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 58,
    url: "https://target.scene7.com/is/image/Target/GUEST_5d3e3e9a-3884-4ad3-9ab5-257c26faecab?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 58,
    url: "https://target.scene7.com/is/image/Target/GUEST_27a79128-d763-4b0a-8bdc-e94b02560b12?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 58,
    url: "https://target.scene7.com/is/image/Target/GUEST_8bd194ce-69b6-4387-aa48-0978815f7aa5?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // smart lights
  {
    productId: 59,
    url: "https://target.scene7.com/is/image/Target/GUEST_a91c5af2-3a15-4475-a1dc-2e2e9dbb6e8e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 59,
    url: "https://target.scene7.com/is/image/Target/GUEST_da827038-f852-4bc2-9d8f-3498e7ee06b4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 59,
    url: "https://target.scene7.com/is/image/Target/GUEST_a83995a1-a302-4e5b-a1e7-db914cb950ba?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 59,
    url: "https://target.scene7.com/is/image/Target/GUEST_63344b4b-cddb-4611-b9ed-086524fb36bb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 59,
    url: "https://target.scene7.com/is/image/Target/GUEST_61091bf1-87b0-49c3-a7d8-b99546ee4e8d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // robovac
  {
    productId: 60,
    url: "https://target.scene7.com/is/image/Target/GUEST_7213a330-c11b-4ffc-bbf7-e3cd1ce8df2e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 60,
    url: "https://target.scene7.com/is/image/Target/GUEST_f315a1c3-9428-46d9-b2b2-d78ac0513f44?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 60,
    url: "https://target.scene7.com/is/image/Target/GUEST_b7541611-7fa8-4959-8f2d-2b1fb6763289?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 60,
    url: "https://target.scene7.com/is/image/Target/GUEST_711b7b0b-b8a9-4e96-a25a-330ab2dadae3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 60,
    url: "https://target.scene7.com/is/image/Target/GUEST_aacae061-45b5-434c-85c3-324c547dcaeb?wid=725&hei=725&qlt=80&fmt=webp"
  },

  /********************** 6. Video Games **********************/
  // Xbox
  {
    productId: 61,
    url: "https://target.scene7.com/is/image/Target/GUEST_15916c73-9548-498f-a378-f67cb42ccd06?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 61,
    url: "https://target.scene7.com/is/image/Target/GUEST_8e47ba0b-98c4-4a02-8937-9480006e827c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 61,
    url: "https://target.scene7.com/is/image/Target/GUEST_d673f0a5-2066-4126-86ee-9d7e1dff41f3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 61,
    url: "https://target.scene7.com/is/image/Target/GUEST_1e8481fb-03e9-4138-909e-8fb9e0452966?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 61,
    url: "https://target.scene7.com/is/image/Target/GUEST_e71c9733-f3ea-4aef-a115-24e970ed3f36?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // PS5
  {
    productId: 62,
    url: "https://target.scene7.com/is/image/Target/GUEST_ae4e8352-bcea-4dd7-97ad-13be08ec32fb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 62,
    url: "https://target.scene7.com/is/image/Target/GUEST_9c41d78f-1155-4069-ab97-e2cef0ade1df?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 62,
    url: "https://target.scene7.com/is/image/Target/GUEST_2edf9c9c-090e-47cd-9de9-9a9fe1fa7f02?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 62,
    url: "https://target.scene7.com/is/image/Target/GUEST_a790e53b-482f-42e0-92ae-b5ce6c0bdb26?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // Meta Quest 2
  {
    productId: 63,
    url: "https://target.scene7.com/is/image/Target/GUEST_a0a92f6c-302a-4f2e-aed1-8e37825e84eb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 63,
    url: "https://target.scene7.com/is/image/Target/GUEST_cd5e5f29-206d-4ddd-878e-ea6fcf6ee2da?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 63,
    url: "https://target.scene7.com/is/image/Target/GUEST_8e221e17-a170-4ccf-806f-e1a4e90ac411?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 63,
    url: "https://target.scene7.com/is/image/Target/GUEST_f3fb424d-1682-46b5-ba62-ab626305ed38?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 63,
    url: "https://target.scene7.com/is/image/Target/GUEST_c6d20ae0-2914-4641-943c-43ad686dd0c0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // controller
  {
    productId: 64,
    url: "https://target.scene7.com/is/image/Target/GUEST_a959e18b-268b-4af5-8f99-58a85d026571?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 64,
    url: "https://target.scene7.com/is/image/Target/GUEST_5b03664e-0d19-4c7c-b340-471188349f6d?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 64,
    url: "https://target.scene7.com/is/image/Target/GUEST_1d496664-5a4e-45f6-8ce1-10d8c259a0f3?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 64,
    url: "https://target.scene7.com/is/image/Target/GUEST_4675cddb-b0df-4eb4-9ee6-6afef6757055?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 64,
    url: "https://target.scene7.com/is/image/Target/GUEST_b0238e4c-e758-4a64-b33a-d998a73fe082?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // external storage
  {
    productId: 65,
    url: "https://target.scene7.com/is/image/Target/GUEST_0c72c7ec-319c-48c2-bd63-1c93f89898e8?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 65,
    url: "https://target.scene7.com/is/image/Target/GUEST_b0558345-98a1-41f7-914d-f419cbc4ec02?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 65,
    url: "https://target.scene7.com/is/image/Target/GUEST_18a38314-54aa-4fbd-a793-86303f2e3956?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 65,
    url: "https://target.scene7.com/is/image/Target/GUEST_6b6de15b-5ff5-4a78-8b5e-ffe8bb45f558?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 65,
    url: "https://target.scene7.com/is/image/Target/GUEST_4aa0d312-a653-43f2-b56b-68876359d1ed?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // headset
  {
    productId: 66,
    url: "https://target.scene7.com/is/image/Target/GUEST_aa38d98d-3853-4678-8d31-228f770a0a57?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 66,
    url: "https://target.scene7.com/is/image/Target/GUEST_f67018c4-fde1-46d2-a429-4b2cb4081b85?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 66,
    url: "https://target.scene7.com/is/image/Target/GUEST_be935d21-9f55-4df3-a918-d5e942a325e9?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 66,
    url: "https://target.scene7.com/is/image/Target/GUEST_d2e73d2d-022d-436b-b891-fd2effdd9d72?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 66,
    url: "https://target.scene7.com/is/image/Target/GUEST_2a3ba9e1-dc35-4207-a84d-5750aaac5323?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // gaming keyboard
  {
    productId: 67,
    url: "https://target.scene7.com/is/image/Target/GUEST_8791c2eb-1466-4b55-b8da-8d4f2d8cb9c1?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 67,
    url: "https://target.scene7.com/is/image/Target/GUEST_3a4a1757-89f3-4a50-a39d-d257ebe3749a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 67,
    url: "https://target.scene7.com/is/image/Target/GUEST_595ad27f-2b82-413d-9003-8499c2bf1ac2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 67,
    url: "https://target.scene7.com/is/image/Target/GUEST_327616a8-095d-46f0-b45f-828739b86440?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 67,
    url: "https://target.scene7.com/is/image/Target/GUEST_f1bee02e-83cc-4ca6-9818-c398cb00890e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // monitor
  {
    productId: 68,
    url: "https://target.scene7.com/is/image/Target/GUEST_ad7e7a54-3b41-4c70-8907-d89b5ffd29f4?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 68,
    url: "https://target.scene7.com/is/image/Target/GUEST_07664f32-0c74-40ff-9cfb-62d0fe4671de?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 68,
    url: "https://target.scene7.com/is/image/Target/GUEST_5d6638c8-7c0b-4cbc-983e-5ebf63fcd777?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 68,
    url: "https://target.scene7.com/is/image/Target/GUEST_4f04b972-13ea-43ec-8518-d4d9c98c382c?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 68,
    url: "https://target.scene7.com/is/image/Target/GUEST_f5e9a876-b01f-4b6c-a01c-5abcaac0503f?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // gaming chair
  {
    productId: 69,
    url: "https://target.scene7.com/is/image/Target/GUEST_e9fc6772-46e0-4467-9dbe-ed90b092f691?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 69,
    url: "https://target.scene7.com/is/image/Target/GUEST_d22d1df4-74a2-43fb-a015-4759ada01f67?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 69,
    url: "https://target.scene7.com/is/image/Target/GUEST_5dc90c51-8200-46ac-87a0-fbb040f71ff4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 69,
    url: "https://target.scene7.com/is/image/Target/GUEST_63aea3ed-1447-445a-97a3-1df96f6de56f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 69,
    url: "https://target.scene7.com/is/image/Target/GUEST_004ec71d-b437-4217-82ca-fec8e53286b4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // gaming desk
  {
    productId: 70,
    url: "https://target.scene7.com/is/image/Target/GUEST_d537e090-cb7e-49e4-863d-9f167a75021a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 70,
    url: "https://target.scene7.com/is/image/Target/GUEST_88164dbc-1615-462c-9298-e3cdb927aa7c?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 70,
    url: "https://target.scene7.com/is/image/Target/GUEST_4254b1a1-c9e6-4348-ba41-8c24f041e178?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 70,
    url: "https://target.scene7.com/is/image/Target/GUEST_bba36239-f0a8-41ac-8bad-d7c68af7e928?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 70,
    url: "https://target.scene7.com/is/image/Target/GUEST_88e887f6-f967-4ae8-a6ef-cf7dd1bb0055?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // arcade
  {
    productId: 71,
    url: "https://target.scene7.com/is/image/Target/GUEST_a70356a5-46c5-4ca2-b044-8433ad633dc7?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 71,
    url: "https://target.scene7.com/is/image/Target/GUEST_643d7c4f-e36e-4086-8dcf-4e1e53ff41e8?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 71,
    url: "https://target.scene7.com/is/image/Target/GUEST_1cf5fdf3-7286-4a6b-87b8-57987b09a09d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 71,
    url: "https://target.scene7.com/is/image/Target/GUEST_34da2f79-4f43-4174-9fd8-5fba36dbfb83?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 71,
    url: "https://target.scene7.com/is/image/Target/GUEST_ce671651-07c6-4231-b064-def990391001?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // gift card
  {
    productId: 72,
    url: "https://target.scene7.com/is/image/Target/GUEST_7e31745a-12de-45c1-b0ba-3777a6e72063?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 72,
    url: "https://target.scene7.com/is/image/Target/GUEST_40685cd1-01ef-4032-a275-0c4d026a665d?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 72,
    url: "https://target.scene7.com/is/image/Target/GUEST_63b58627-395f-4388-860e-3f3807460f61?wid=1000&hei=1000&qlt=80&fmt=webp",
  },

  /********************** 7. Sports & Outdoors **********************/

  // free weights
  {
    productId: 73,
    url: "https://target.scene7.com/is/image/Target/GUEST_5eef7b28-4a4f-4453-bba9-04139f4b984d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 73,
    url: "https://target.scene7.com/is/image/Target/GUEST_5c1d5908-80c0-43e8-ac72-a1c6288c1d31?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 73,
    url: "https://target.scene7.com/is/image/Target/GUEST_090623c3-d9b7-49b4-b5cd-b4ff82d4ff68?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // yoga mat
  {
    productId: 74,
    url: "https://target.scene7.com/is/image/Target/GUEST_d972c756-ef1b-4ed7-bdf5-1b86ef5fc625?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 74,
    url: "https://target.scene7.com/is/image/Target/GUEST_b4c34ee9-edab-4ee1-9527-6f91c2484e64?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 74,
    url: "https://target.scene7.com/is/image/Target/GUEST_b63a87be-d62d-4b51-a285-27e34d6fb9d7?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // tennis
  {
    productId: 75,
    url: "https://target.scene7.com/is/image/Target/GUEST_a9307de1-8b92-4b68-a2c3-1affc025b94d?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 75,
    url: "https://target.scene7.com/is/image/Target/GUEST_70cbd326-d0be-4d05-860e-c7a877e7a93e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 75,
    url: "https://target.scene7.com/is/image/Target/GUEST_9a74e298-6704-4b23-9c70-8cca2de77471?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 75,
    url: "https://target.scene7.com/is/image/Target/GUEST_3d522fb5-18a6-4827-90e3-1712013fa794?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // golf balls
  {
    productId: 76,
    url: "https://target.scene7.com/is/image/Target/GUEST_7c11b4eb-7dbf-45d7-915d-11cf54d7360a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 76,
    url: "https://target.scene7.com/is/image/Target/GUEST_3addb222-1b47-4f00-9bb7-03c7d25e0e61?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 76,
    url: "https://target.scene7.com/is/image/Target/GUEST_b7919ffb-bbb1-4e65-83f3-194cda1210f7?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // hiking
  {
    productId: 77,
    url: "https://target.scene7.com/is/image/Target/GUEST_bae5a4c0-93b9-4206-8b57-afd0d1c94218?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 77,
    url: "https://target.scene7.com/is/image/Target/GUEST_2c55db8a-4025-4ddd-b477-a73ba355768a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 77,
    url: "https://target.scene7.com/is/image/Target/GUEST_7c1e3d72-b817-4baa-8431-d8902c8cc5f2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 77,
    url: "https://target.scene7.com/is/image/Target/GUEST_57e70487-a425-42ea-9da9-e0da692f32b2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 77,
    url: "https://target.scene7.com/is/image/Target/GUEST_1758ee75-a8ce-4589-9258-dea5410ae6db?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // water bottle
  {
    productId: 78,
    url: "https://target.scene7.com/is/image/Target/GUEST_db6caea9-d8b6-437f-9070-3781ace2584c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 78,
    url: "https://target.scene7.com/is/image/Target/GUEST_1f4127ff-44b7-41fa-9f79-c04f7c2a4695?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // mattress
  {
    productId: 79,
    url: "https://target.scene7.com/is/image/Target/GUEST_94fcdf18-9e04-44dc-82e8-b3cf707e07ec?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 79,
    url: "https://target.scene7.com/is/image/Target/GUEST_124dba49-ea29-44a8-afac-31f9cdb768ac?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 79,
    url: "https://target.scene7.com/is/image/Target/GUEST_494e1d18-752f-45a0-bef2-1b15bc1f0fcf?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 79,
    url: "https://target.scene7.com/is/image/Target/GUEST_6c4314bc-ef13-4e22-8039-74650e62dd50?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 79,
    url: "https://target.scene7.com/is/image/Target/GUEST_076c5c46-9a42-4f1d-ac30-d6d7774895be?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // tent
  {
    productId: 80,
    url: "https://target.scene7.com/is/image/Target/GUEST_2bce21e9-1d04-4fc8-ad00-19b1d9f164cf?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 80,
    url: "https://target.scene7.com/is/image/Target/GUEST_f9df53b9-ab14-43ea-8a14-5eccd1c37635?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 80,
    url: "https://target.scene7.com/is/image/Target/GUEST_71017f49-ddc4-4434-ab53-adb9806ae737?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 80,
    url: "https://target.scene7.com/is/image/Target/GUEST_7511e519-ca1d-44b2-bef2-00bc8389ad97?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 80,
    url: "https://target.scene7.com/is/image/Target/GUEST_f09448cb-d463-4ed4-8b95-4abfe6e3b4d8?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // backpack
  {
    productId: 81,
    url: "https://target.scene7.com/is/image/Target/GUEST_be6daf6d-bff8-4642-94ae-92f59decdf05?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 81,
    url: "https://target.scene7.com/is/image/Target/GUEST_0220edde-bc97-4cd0-85f1-7d3baf753e9e?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // luggage
  {
    productId: 82,
    url: "https://target.scene7.com/is/image/Target/GUEST_75cfddce-c706-4065-8fb0-6a09fbefb672?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 82,
    url: "https://target.scene7.com/is/image/Target/GUEST_f5da5f81-30a5-4e01-852c-12f54e1e6638?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 82,
    url: "https://target.scene7.com/is/image/Target/GUEST_3606d027-ce43-4fc1-89e6-8f7be97a3065?wid=800&hei=800&qlt=80&fmt=webp",
  },
    // bike
  {
    productId: 83,
    url: "https://target.scene7.com/is/image/Target/GUEST_aacde022-20a0-4705-9574-5800e298dfaf?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 83,
    url: "https://target.scene7.com/is/image/Target/GUEST_5c6e16ae-6f04-4eff-9dbe-2741db047cba?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 83,
    url: "https://target.scene7.com/is/image/Target/GUEST_514fc445-ef58-4ceb-935a-8a50c80294ef?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 83,
    url: "https://target.scene7.com/is/image/Target/GUEST_00c816d8-07a4-4e52-91ea-b6f372d7f3b2?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 83,
    url: "https://target.scene7.com/is/image/Target/GUEST_efe641ca-69f3-4fba-b899-d6c392ac86ea?wid=800&hei=800&qlt=80&fmt=webp",
  },
    // fit bit
  {
    productId: 84,
    url: "https://target.scene7.com/is/image/Target/GUEST_2df9b563-6a03-45df-a697-8dec7df7f413?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 84,
    url: "https://target.scene7.com/is/image/Target/GUEST_b2949ffd-c08f-4afb-a795-32ae8fcba6a3?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 84,
    url: "https://target.scene7.com/is/image/Target/GUEST_42988866-c3b2-4ba7-9a02-031dad5346d5?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 84,
    url: "https://target.scene7.com/is/image/Target/GUEST_2382279a-2997-495f-9780-fa8b13ee1729?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 84,
    url: "https://target.scene7.com/is/image/Target/GUEST_15fe6307-15ab-4b58-a784-64629504d91e?wid=800&hei=800&qlt=80&fmt=webp",
  },

  /********************** 8. Pets **********************/
  // cat food
  {
    productId: 85,
    url: "https://target.scene7.com/is/image/Target/GUEST_22e19e8c-9cd8-48db-b94b-0ecf52fbd37a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 85,
    url: "https://target.scene7.com/is/image/Target/GUEST_85a2827c-958f-42e8-b35b-cdc7bed74c7f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 85,
    url: "https://target.scene7.com/is/image/Target/GUEST_e0b7fae9-40a7-45bc-9edf-50749a0489c9?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 85,
    url: "https://target.scene7.com/is/image/Target/GUEST_1d8a2719-01e4-4116-9129-b21e893da525?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // dog food
  {
    productId: 86,
    url: "https://target.scene7.com/is/image/Target/GUEST_688bc1cc-b985-4e0b-bce4-c08bd28c34e0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 86,
    url: "https://target.scene7.com/is/image/Target/GUEST_63c49ce1-6b1d-446c-a55b-04d00dd2acd5?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 86,
    url: "https://target.scene7.com/is/image/Target/GUEST_33acd736-7e1d-4d56-9b08-a3d1157c004a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 86,
    url: "https://target.scene7.com/is/image/Target/GUEST_0fd99f02-5aa0-4eb4-9c80-dc8d8dcf8121?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 86,
    url: "https://target.scene7.com/is/image/Target/GUEST_90feeb02-4134-4fc1-8c5b-be1358bc838b?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // cat toy
  {
    productId: 87,
    url: "https://target.scene7.com/is/image/Target/GUEST_bd0bac8f-53de-44dc-9610-3c9f7c4c8b8c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 87,
    url: "https://target.scene7.com/is/image/Target/GUEST_67d3b0eb-8e52-4acd-9d12-ebfa6dc72a46?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 87,
    url: "https://target.scene7.com/is/image/Target/GUEST_df8c1d7c-12e2-4521-9131-a54e6c3f4f0c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // dog toy
  {
    productId: 88,
    url: "https://target.scene7.com/is/image/Target/GUEST_a85d717b-b451-4299-8e4d-f030bffa03f2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 88,
    url: "https://target.scene7.com/is/image/Target/GUEST_351ef836-c19c-4300-82d0-78d972999451?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 88,
    url: "https://target.scene7.com/is/image/Target/GUEST_dd972cb8-0dfc-4490-8333-dc489724fa99?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // collar
  {
    productId: 89,
    url: "https://target.scene7.com/is/image/Target/GUEST_03d01714-eda1-4cc2-af58-6f7f5cb134d7?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 89,
    url: "https://target.scene7.com/is/image/Target/GUEST_409773d4-7078-4871-a66e-5ba5783367b8?wid=800&hei=800&qlt=80&fmt=webp",
  },
  {
    productId: 89,
    url: "https://target.scene7.com/is/image/Target/GUEST_607bb56a-54cd-487f-b7ad-ead8e25cd263?wid=800&hei=800&qlt=80&fmt=webp",
  },
  // leash
  {
    productId: 90,
    url: "https://target.scene7.com/is/image/Target/GUEST_f2fdecfd-7900-4e28-95a5-b2d6fc1e3e15?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 90,
    url: "https://target.scene7.com/is/image/Target/GUEST_f9b7426c-b5e7-4720-a49e-8cc54839db15?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 90,
    url: "https://target.scene7.com/is/image/Target/GUEST_2170cc1f-ca5b-41a5-825f-54f88543d765?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // cat clothes
  {
    productId: 91,
    url: "https://target.scene7.com/is/image/Target/GUEST_6cd9a749-c59a-4887-ac33-52cb56a99852?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 91,
    url: "https://target.scene7.com/is/image/Target/GUEST_e1016345-f197-4da2-8262-a9fb81eed73e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 91,
    url: "https://target.scene7.com/is/image/Target/GUEST_1efca48a-aa28-465c-92b5-aad3c74a4a60?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // dog clothes
  {
    productId: 92,
    url: "https://target.scene7.com/is/image/Target/GUEST_37cdb59f-d2d3-4fa5-bc89-7a15b2794a37?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 92,
    url: "https://target.scene7.com/is/image/Target/GUEST_0456bfeb-7ad8-49f9-ba2a-22e24b3965ce?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 92,
    url: "https://target.scene7.com/is/image/Target/GUEST_30b5c1e1-0672-43e3-99a4-c6507d0dd2cb?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // dog bags
  {
    productId: 93,
    url: "https://target.scene7.com/is/image/Target/GUEST_636c81f9-c317-4425-bea9-d4dafc861783?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 93,
    url: "https://target.scene7.com/is/image/Target/GUEST_9e9ad283-2693-4a28-b14f-b66327e6342d?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 93,
    url: "https://target.scene7.com/is/image/Target/GUEST_2c335dcd-0bb7-4b89-b438-81032d229fdd?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 93,
    url: "https://target.scene7.com/is/image/Target/GUEST_0550c55d-cca0-4393-9c46-9a2bfc77f407?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 93,
    url: "https://target.scene7.com/is/image/Target/GUEST_7f8cf60b-fc27-491f-8214-7c9fe142cc67?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // litter
  {
    productId: 94,
    url: "https://target.scene7.com/is/image/Target/GUEST_f88a8424-078f-4a7c-ac2e-64881b225be2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 94,
    url: "https://target.scene7.com/is/image/Target/GUEST_f8d28124-f2dc-403b-b1dc-989cc0a96e0a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 94,
    url: "https://target.scene7.com/is/image/Target/GUEST_440ce76b-5cb0-4307-b721-bf1177f0087f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 94,
    url: "https://target.scene7.com/is/image/Target/GUEST_82cba777-7c33-4c13-8dbc-458bd589be9f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 94,
    url: "https://target.scene7.com/is/image/Target/GUEST_e6adfab6-e1b0-4d57-a393-7262c19f320a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // litter box
  {
    productId: 95,
    url: "https://target.scene7.com/is/image/Target/GUEST_d59969ce-3d58-428b-9ef6-109da0cc047d?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 95,
    url: "https://target.scene7.com/is/image/Target/GUEST_8fe42533-89c1-4b04-a316-39b31b9c68bc?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 95,
    url: "https://target.scene7.com/is/image/Target/GUEST_ef8e73a2-a530-463d-88db-2a5a081b67fc?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 95,
    url: "https://target.scene7.com/is/image/Target/GUEST_16b1a852-1007-49a1-adb3-28c618564c88?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 95,
    url: "https://target.scene7.com/is/image/Target/GUEST_29f0b830-d6a0-429f-8e2b-cf2a6f073541?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // feeder
  {
    productId: 96,
    url: "https://target.scene7.com/is/image/Target/GUEST_07edc070-9413-49ee-a5c4-8e518e894451?wid=1000&hei=1000&qlt=80&fmt=webp",

  },
  {
    productId: 96,
    url: "https://target.scene7.com/is/image/Target/GUEST_664f608e-3426-49b3-9690-7dc9ff1fb8dc?wid=1000&hei=1000&qlt=80&fmt=webp",

  },
  {
    productId: 96,
    url: "https://target.scene7.com/is/image/Target/GUEST_aadb5f42-30a8-4eab-a472-65125d299305?wid=1000&hei=1000&qlt=80&fmt=webp",

  },
  {
    productId: 96,
    url: "https://target.scene7.com/is/image/Target/GUEST_80ed1123-a5c4-48c0-83c8-cdb68dec7d3a?wid=1000&hei=1000&qlt=80&fmt=webp",

  },
  {
    productId: 96,
    url: "https://target.scene7.com/is/image/Target/GUEST_8e9ab985-42c0-4c37-925c-3c6dcb6e0c96?wid=1000&hei=1000&qlt=80&fmt=webp",

  },

  /********************** 9. Furniture **********************/
  // dining table
  {
    productId: 97,
    url: "https://target.scene7.com/is/image/Target/GUEST_4f4ba632-d867-451f-a294-d3a4ddebef67?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 97,
    url: "https://target.scene7.com/is/image/Target/GUEST_b4af8024-6584-4ae4-a476-c091622633b6?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 97,
    url: "https://target.scene7.com/is/image/Target/GUEST_61b3a25d-fa6a-497e-9907-303c8775d606?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 97,
    url: "https://target.scene7.com/is/image/Target/GUEST_6c980d39-7246-494f-b7d1-93b835f6b488?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // dinging chair
  {
    productId: 98,
    url: "https://target.scene7.com/is/image/Target/GUEST_7ecb88f7-5ca9-41eb-92cc-f98ec2d71f56?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 98,
    url: "https://target.scene7.com/is/image/Target/GUEST_bb97afad-8211-4460-afdc-1834a5cc664e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 98,
    url: "https://target.scene7.com/is/image/Target/GUEST_76953d5f-f2d7-43ba-9abe-385148211677?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 98,
    url: "https://target.scene7.com/is/image/Target/GUEST_dd626444-dd74-48c8-b6f0-bad1116b6106?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 98,
    url: "https://target.scene7.com/is/image/Target/GUEST_d45d4d04-33d9-40f6-97f4-0e037044fbb4?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // side tables
  {
    productId: 99,
    url: "https://target.scene7.com/is/image/Target/GUEST_8a672ebd-dcf7-41be-9b2b-aa3cedd351ba?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 99,
    url: "https://target.scene7.com/is/image/Target/GUEST_6fb2cce2-2bc0-4a13-96b3-9f10bb2dd751?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 99,
    url: "https://target.scene7.com/is/image/Target/GUEST_7b99fcbb-8382-4040-a90d-2a2ed3eb30d9?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 99,
    url: "https://target.scene7.com/is/image/Target/GUEST_ee19eef3-bc57-4a25-a3ab-dd33fe55fe1e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 99,
    url: "https://target.scene7.com/is/image/Target/GUEST_a398085e-2c11-4078-80cf-e271650e32bd?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // bookcase
  {
    productId: 100,
    url: "https://target.scene7.com/is/image/Target/GUEST_ec1a74d3-9304-4c68-a485-f939992eef26?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 100,
    url: "https://target.scene7.com/is/image/Target/GUEST_ee096468-a661-40d5-80ce-fe3e95869991?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 100,
    url: "https://target.scene7.com/is/image/Target/GUEST_59abbfe1-6fda-48a3-8c47-9026c31f1ee8?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 100,
    url: "https://target.scene7.com/is/image/Target/GUEST_be6f45ce-97c4-4b74-bfb6-b49b3283c8be?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 100,
    url: "https://target.scene7.com/is/image/Target/GUEST_673071bd-fa01-45ae-9f39-e8b7b31e6a97?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // drawer
  {
    productId: 101,
    url: "https://target.scene7.com/is/image/Target/GUEST_b8cba790-05c5-4b7a-9d9f-ba1d38fb3871?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 101,
    url: "https://target.scene7.com/is/image/Target/GUEST_610e77a8-6077-4ef4-8ae4-308d72eb29a0?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 101,
    url: "https://target.scene7.com/is/image/Target/GUEST_2872c231-6ab5-455d-8a8b-39a6910bc4b0?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // lamp
  {
    productId: 102,
    url: "https://target.scene7.com/is/image/Target/GUEST_7388bcf8-9b32-4543-a7ca-027b1be11c80?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 102,
    url: "https://target.scene7.com/is/image/Target/GUEST_1352efbf-2749-432b-a85a-4b385f427d86?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // mirror
  {
    productId: 103,
    url: "https://target.scene7.com/is/image/Target/GUEST_7d86e436-b2fc-4cb5-9b24-dfb6e5da3c3e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 103,
    url: "https://target.scene7.com/is/image/Target/GUEST_ab7b0124-716f-4572-82a7-89a165440083?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 103,
    url: "https://target.scene7.com/is/image/Target/GUEST_d97fd26b-74aa-41ab-8a7a-57432b06da70?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 103,
    url: "https://target.scene7.com/is/image/Target/GUEST_068bf581-37f8-4198-9758-7cdb183425df?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 103,
    url: "https://target.scene7.com/is/image/Target/GUEST_74f4ef50-1837-418f-857c-35b26d991e4a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // picture frame
  {
    productId: 104,
    url: "https://target.scene7.com/is/image/Target/GUEST_3ece2510-8fc0-49c4-a648-d401d574974b?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 104,
    url: "https://target.scene7.com/is/image/Target/GUEST_f7eb4cb7-9b1f-42a3-8dc8-58215d1421af?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 104,
    url: "https://target.scene7.com/is/image/Target/GUEST_f14f35da-8e2d-4606-8796-0b9261bcc1d1?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 104,
    url: "https://target.scene7.com/is/image/Target/GUEST_ad180319-e460-46b5-bdb6-c94bc372fda3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 104,
    url: "https://target.scene7.com/is/image/Target/GUEST_ee79f20b-225d-4935-9218-964850e7a425?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // vase
  {
    productId: 105,
    url: "https://target.scene7.com/is/image/Target/GUEST_6362d263-417f-434a-ac0e-38ad99eeef0a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 105,
    url: "https://target.scene7.com/is/image/Target/GUEST_7772f6e4-0482-4329-8f9e-96e0f712f0b3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 105,
    url: "https://target.scene7.com/is/image/Target/GUEST_65149ed5-aa6d-4934-b929-e06c31aaf602?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // planter
  {
    productId: 106,
    url: "https://target.scene7.com/is/image/Target/GUEST_f11f3da4-13d5-4d46-96e3-8ea73936d90a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 106,
    url: "https://target.scene7.com/is/image/Target/GUEST_acbadb6c-ec6a-4bf2-a661-ff1b1c7ae110?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 106,
    url: "https://target.scene7.com/is/image/Target/GUEST_a9777f6b-d174-4869-8a1d-026db6fe19f0?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 106,
    url: "https://target.scene7.com/is/image/Target/GUEST_a4b5c976-12e5-40ed-ae8a-de6470aa8f76?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 106,
    url: "https://target.scene7.com/is/image/Target/GUEST_51e49182-b83c-4d54-ab9b-be63a6316c05?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // trash bin
  {
    productId: 107,
    url: "https://target.scene7.com/is/image/Target/GUEST_03b2980c-b072-4c28-9b02-cb7029f0d5bd?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 107,
    url: "https://target.scene7.com/is/image/Target/GUEST_7f4f94bc-6e92-420a-ba2c-7637669685a0?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 107,
    url: "https://target.scene7.com/is/image/Target/GUEST_c2932993-dbc6-44b6-8472-3b4f6a1aab9f?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 107,
    url: "https://target.scene7.com/is/image/Target/GUEST_8d36cdc4-9362-4e81-a474-53869d98c8aa?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 107,
    url: "https://target.scene7.com/is/image/Target/GUEST_907c3d76-7705-4906-9d9b-4b6af48ae503?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // whiteboard
  {
    productId: 108,
    url: "https://target.scene7.com/is/image/Target/GUEST_f02f0790-9369-443c-95a0-d407ee8aacfc?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 108,
    url: "https://target.scene7.com/is/image/Target/GUEST_15cdceeb-af55-42aa-9ff2-65d266b9541c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 108,
    url: "https://target.scene7.com/is/image/Target/GUEST_135d6ace-8586-465f-973d-dc4af74b787a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 108,
    url: "https://target.scene7.com/is/image/Target/GUEST_a3a2c4b9-6724-4edd-8bfb-14c768a1e3a9?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 108,
    url: "https://target.scene7.com/is/image/Target/GUEST_46df70b8-ba2e-4869-a208-57847bb8e4a9?wid=725&hei=725&qlt=80&fmt=webp"
  },

  /********************** 10. Clearance **********************/
  // wreath
  {
    productId: 109,
    url: "https://target.scene7.com/is/image/Target/GUEST_7db6517c-b069-4915-873c-00a393dbd324?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 109,
    url: "https://target.scene7.com/is/image/Target/GUEST_5f7bb6b7-f1c5-45a4-9f68-5eb999179b69?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 109,
    url: "https://target.scene7.com/is/image/Target/GUEST_fa74ab5d-54ed-4bcf-8802-71463e417703?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // ornaments
  {
    productId: 110,
    url: "https://target.scene7.com/is/image/Target/GUEST_78e29e1a-3485-4786-9490-9b345d11970e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 110,
    url: "https://target.scene7.com/is/image/Target/GUEST_3156ef27-44c6-4163-abf3-6574810edb3a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 110,
    url: "https://target.scene7.com/is/image/Target/GUEST_19d26c07-5a71-4e21-9125-b2228a5f1898?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // stocking
  {
    productId: 111,
    url: "https://target.scene7.com/is/image/Target/GUEST_41b48906-b028-456e-8eb5-08508cff3bf5?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 111,
    url: "https://target.scene7.com/is/image/Target/GUEST_5bf29494-2f13-42a3-aa42-a20bc0f4fdbe?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // lights
  {
    productId: 112,
    url: "https://target.scene7.com/is/image/Target/GUEST_e534435d-e31e-4b92-8e7c-bc6a63c849e0?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 112,
    url: "https://target.scene7.com/is/image/Target/GUEST_5c86ecc2-4c60-4b3b-b844-978216e7ca69?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 112,
    url: "https://target.scene7.com/is/image/Target/GUEST_4e7fe0be-1442-4996-b740-3a5d7e6d98d4?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 112,
    url: "https://target.scene7.com/is/image/Target/GUEST_baaf6ce6-572c-4d4d-8d71-050b2471ff95?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 112,
    url: "https://target.scene7.com/is/image/Target/GUEST_01f6b51a-652d-4e7d-b89d-e40bdd518f25?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // candy canes
  {
    productId: 113,
    url: "https://target.scene7.com/is/image/Target/GUEST_c87beee5-d32a-4c13-9215-22da08974726?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 113,
    url: "https://target.scene7.com/is/image/Target/GUEST_404b2056-c723-4d8e-9e2a-169870d8dd6e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 113,
    url: "https://target.scene7.com/is/image/Target/GUEST_e3eb42bf-bfb3-40f0-9f04-1b807acb45a9?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 113,
    url: "https://target.scene7.com/is/image/Target/GUEST_9c0ed759-fdbc-423e-9f51-573b9929ecfe?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // gingerbread house
  {
    productId: 114,
    url: "https://target.scene7.com/is/image/Target/GUEST_c598a21c-b009-4920-b50c-f72f4f956ffd?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 114,
    url: "https://target.scene7.com/is/image/Target/GUEST_61307d6e-728f-4b2b-8ca1-e9aef519901b?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 114,
    url: "https://target.scene7.com/is/image/Target/GUEST_06bd0b90-1802-4a44-9bc1-7ad8c6b2dbde?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 114,
    url: "https://target.scene7.com/is/image/Target/GUEST_e1690b11-3f21-430a-8aa2-2529bca2956f?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // mug
  {
    productId: 115,
    url: "https://target.scene7.com/is/image/Target/GUEST_51915f2c-3254-4333-b1b0-f400d1190f8c?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 115,
    url: "https://target.scene7.com/is/image/Target/GUEST_d8d78898-aac3-460d-851b-2b462f44dc00?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 115,
    url: "https://target.scene7.com/is/image/Target/GUEST_0e16e950-b499-4eff-9183-167118f83ef9?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // candles
  {
    productId: 116,
    url: "https://target.scene7.com/is/image/Target/GUEST_45c3b200-2961-40e6-ad39-d3e3a0f619a0?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 116,
    url: "https://target.scene7.com/is/image/Target/GUEST_7473955f-7701-4a6f-ab2a-eea6040b3d0c?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // menorah
  {
    productId: 117,
    url: "https://target.scene7.com/is/image/Target/GUEST_54c8bae6-40a0-4c0d-bf0f-78abf06495d7?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 117,
    url: "https://target.scene7.com/is/image/Target/GUEST_ca07e28c-d1d9-4bab-bdcd-c517ecfb2241?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 117,
    url: "https://target.scene7.com/is/image/Target/GUEST_554a54cf-e278-4c84-967d-c1f8736d172a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // gift wrap
  {
    productId: 118,
    url: "https://target.scene7.com/is/image/Target/GUEST_4fbc6a07-8d5d-4ed9-9e05-9f6bed95e849?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 118,
    url: "https://target.scene7.com/is/image/Target/GUEST_0b6b8d89-84db-42c9-a0b7-9f252c2f349f?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // cards
  {
    productId: 119,
    url: "https://target.scene7.com/is/image/Target/GUEST_9a722488-0df7-4555-9039-cde8a1327413?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 119,
    url: "https://target.scene7.com/is/image/Target/GUEST_b041172e-f002-4ff2-b5b1-fc4713209d32?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 119,
    url: "https://target.scene7.com/is/image/Target/GUEST_a1022e8a-f40a-4f0a-95e1-ab169bfa5f90?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 119,
    url: "https://target.scene7.com/is/image/Target/GUEST_51494c7b-8242-4f4b-aaac-04c702566a27?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // tree
  {
    productId: 120,
    url: "https://target.scene7.com/is/image/Target/GUEST_db5ef904-4b7d-47b8-8bff-64ff5d431ba7?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 120,
    url: "https://target.scene7.com/is/image/Target/GUEST_a2c2e7e9-3de7-4898-8c40-ebeb926549bd?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 120,
    url: "https://target.scene7.com/is/image/Target/GUEST_5eccb109-9ca9-407d-877e-04eb35828497?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 120,
    url: "https://target.scene7.com/is/image/Target/GUEST_25a83141-71a8-479d-b730-99bc2d8a50c4?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 120,
    url: "https://target.scene7.com/is/image/Target/GUEST_776dac9c-8072-4a44-a704-13640c10d28b?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
]





let prodIds = [];
demoProductImages.forEach(image => {
  if (!prodIds.includes(image.productId)) {
    prodIds.push(image.productId)
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'ProductImages',
      demoProductImages,
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'ProductImages',
      { productId: { [Op.in]: prodIds } }
    )
  }
};
