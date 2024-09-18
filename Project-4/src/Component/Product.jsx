import React, { useState } from 'react'

export default function Product() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [brand, setBrand] = useState("")
  const [gst, setGst] = useState("")
  const [address, setAddress] = useState("")

  const [nameerr, setNameerr] = useState("")
  const [emailerr, setEmailerr] = useState("")
  const [phoneerr, setPhoneerr] = useState("")
  const [branderr, setBranderr] = useState("")
  const [gsterr, setGsterr] = useState("")
  const [addresserr, setAddresserr] = useState("")

  // Add product
  const [electricname, setElectricName] = useState("")
  const [electricprice, setElectricPrice] = useState("")
  const [electricWarranty, setElectricWarranty] = useState("")
  const [electricDiscount, setElectricDiscount] = useState("")
  const [electricDescription, setElectricDescription] = useState("")

  const [electricnameErr, setElectricNameErr] = useState("")
  const [electricpriceErr, setElectricPriceErr] = useState("")
  const [electricWarrantyErr, setElectricWarrantyErr] = useState("")
  const [electricDiscountErr, setElectricDiscountErr] = useState("")
  const [electricDescriptionErr, setElectricDescriptionErr] = useState("")

  // Clothing
  const [clothingname, setClothingName] = useState("")
  const [clothingprice, setClothingPrice] = useState("")
  const [clothingSize, setClothingSize] = useState("")
  const [clothingDiscount, setClothingDiscount] = useState("")
  const [clothingDescription, setClothingDescription] = useState("")

  const [clothingnameErr, setClothingNameErr] = useState("")
  const [clothingpriceErr, setClothingPriceErr] = useState("")
  const [clothingSizeErr, setClothingSizeErr] = useState("")
  const [clothingDiscountErr, setClothingDiscountErr] = useState("")
  const [clothingDescriptionErr, setClothingDescriptionErr] = useState("")

  // Books
  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const [bookPrice, setBookPrice] = useState("")
  const [bookISBN, setBookISBN] = useState("")
  const [bookDescription, setBookDescription] = useState("")

  const [bookTitleErr, setBookTitleErr] = useState("")
  const [bookAuthorErr, setBookAuthorErr] = useState("")
  const [bookPriceErr, setBookPriceErr] = useState("")
  const [bookISBNErr, setBookISBNErr] = useState("")
  const [bookDescriptionErr, setBookDescriptionErr] = useState("")


  const [gameName, setGameName] = useState("")
  const [gamePrice, setGamePrice] = useState("")
  const [gameCtegory, setGameCategory] = useState("")
  const [gameSize, setGameSize] = useState("")
  const [gameDescription, setGameDescription] = useState("")


  const [gameNameErr, setGameNameErr] = useState("")
  const [gamePriceErr, setGamePriceErr] = useState("")
  const [gameCtegoryErr, setGameCategoryErr] = useState("")
  const [gameSizeErr, setGameSizeErr] = useState("")
  const [gameDescriptionErr, setGameDescriptionErr] = useState("")

  const [healthCareName, setHealthCareName] = useState("")
  const [healthCarePrice, setHealthCarePrice] = useState("")
  const [healthCareDescription, setHealthCareDescription] = useState("")

  const [healthCareNameErr, setHealthCareNameErr] = useState("")
  const [healthCarePriceErr, setHealthCarePriceErr] = useState("")
  const [healthCareDescriptionErr, setHealthCareDescriptionErr] = useState("")



  const [hide, setHide] = useState("")
  const [detail, setDetail] = useState("none")
  const [product, setProduct] = useState("none")
  const [card, setCard] = useState("none")
  const [category, setCategory] = useState("")

  const setupdate = (e) => {
    setProduct("block")
  }

  // Seller Form Submission
  const formSubmit = (e) => {
    e.preventDefault()
    let submit = true
    if (!name) {
      setNameerr("Name Required")
      submit = false
    } else {
      setNameerr("")
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailerr("Valid Email Required")
      submit = false
    } else {
      setEmailerr("")
    }

    if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone)) {
      setPhoneerr("Phone Required")
      submit = false
    } else {
      setPhoneerr("")
    }

    if (!brand) {
      setBranderr("Brand Required")
      submit = false
    } else {
      setBranderr("")
    }

    if (!/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test(gst)) {
      setGsterr("GST Required")
      // 27AAPFU0939F1ZV
      submit = false
    } else {
      setGsterr("")
    }

    if (!address) {
      setAddresserr("Address Required")
      submit = false
    } else {
      setAddresserr("")
    }

    if (submit) {
      setHide('none')
      setDetail("block")
      console.log(name, email, phone, brand, gst, address)
    }
  }

  // Electric Form Submission
  const formSubmit2 = (e) => {
    e.preventDefault()
    let submit2 = true

    if (!electricname) {
      setElectricNameErr("Name Required")
      submit2 = false
    } else {
      setElectricNameErr("")
    }

    if (!/\b([0-9]|[1-9][0-9]|100)\b/.test(electricprice)) {
      setElectricPriceErr("Price Required")
      submit2 = false
    } else {
      setElectricPriceErr("")
    }

    if (!/\b([0-9]|[1-9][0-9]|100)\b/.test(electricWarranty)) {
      setElectricWarrantyErr("Warranty Required")
      submit2 = false
    } else {
      setElectricWarrantyErr("")
    }

    if (!/\b([0-9]|[1-9][0-9]|100)\b/.test(electricDiscount)) {
      setElectricDiscountErr("Discount Required")
      submit2 = false
    } else {
      setElectricDiscountErr("")
    }

    if (!electricDescription) {
      setElectricDescriptionErr("Description Required")
      submit2 = false
    } else {
      setElectricDescriptionErr("")
    }

    if (submit2) {
      setCard("block")
      setProduct("none")
    }
  }

  // Clothing Form Submission
  const formSubmit3 = (e) => {
    e.preventDefault();
    let submit3 = true;

    if (!clothingname) {
      setClothingNameErr("Name Required");
      submit3 = false;
    } else {
      setClothingNameErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|100)\b/.test(clothingprice)) {
      setClothingPriceErr("Price Required");
      submit3 = false;
    } else {
      setClothingPriceErr("");
    }

    if (!clothingSize) {
      setClothingSizeErr("Size Required");
      submit3 = false;
    } else {
      setClothingSizeErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|100)\b/.test(clothingDiscount)) {
      setClothingDiscountErr("Discount Required");
      submit3 = false;
    } else {
      setClothingDiscountErr("");
    }

    if (!clothingDescription) {
      setClothingDescriptionErr("Description Required");
      submit3 = false;
    } else {
      setClothingDescriptionErr("");
    }

    if (submit3) {
      setCard("block");
      setProduct("none");
    }
  };

  // Books Form Submission
  const formSubmit4 = (e) => {
    e.preventDefault();
    let submit4 = true;

    if (!bookTitle) {
      setBookTitleErr("Title Required");
      submit4 = false;
    } else {
      setBookTitleErr("");
    }

    if (!bookAuthor) {
      setBookAuthorErr("Author Required");
      submit4 = false;
    } else {
      setBookAuthorErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|10000)\b/.test(bookPrice)) {
      setBookPriceErr("Price Required");
      submit4 = false;
    } else {
      setBookPriceErr("");
    }

    if (!bookISBN) {
      setBookISBNErr("ISBN Required");
      submit4 = false;
    } else {
      setBookISBNErr("");
    }

    if (!bookDescription) {
      setBookDescriptionErr("Description Required");
      submit4 = false;
    } else {
      setBookDescriptionErr("");
    }

    if (submit4) {
      setCard("block");
      setProduct("none");
    }
  };


  // game form submit 

  const formSubmit5 = (e) => {
    e.preventDefault();
    let submit5 = true;

    if (!gameName) {
      setGameNameErr("Name Required");
      submit5 = false;
    } else {
      setGameNameErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|10000)\b/.test(gamePrice)) {
      setGamePriceErr("Price Required");
      submit5 = false;
    } else {
      setGamePriceErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|10000)\b/.test(gameSize)) {
      setGameSizeErr("Size Required");
      submit5 = false;
    } else {
      setGameSizeErr("");
    }

    if (!gameCtegory) {
      setGameCategoryErr("Category Required");
      submit5 = false;
    } else {
      setGameCategoryErr("");
    }

    if (!gameDescription) {
      setGameDescriptionErr("Description Required");
      submit5 = false;
    } else {
      setGameDescriptionErr("");
    }

    if (submit5) {
      setCard("block");
      setProduct("none");
    }
  };



  // helth care 


  const formSubmit6 = (e) => {
    e.preventDefault();
    let submit6 = true;

    if (!healthCareName) {
      setHealthCareNameErr("Name Required");
      submit6 = false;
    } else {
      setHealthCareNameErr("");
    }

    if (!/\b([0-9]|[1-9][0-9]|10000)\b/.test(healthCarePrice)) {
      setHealthCarePriceErr("Price Required");
      submit6 = false;
    } else {
      setHealthCarePriceErr("");
    }

    if (!healthCareDescription) {
      setHealthCareDescriptionErr("Description Required");
      submit6 = false;
    } else {
      setHealthCareDescriptionErr("");
    }

    if (submit6) {
      setCard("block");
      setProduct("none");
    }
  };
  return (
    <div>
      <div className="seller" style={{ display: hide }}>
        <form onSubmit={(e) => { formSubmit(e) }}>
          <h2>Seller Registration</h2>
          <br />
          <label htmlFor="">Name</label><br />
          <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
          <span>{nameerr}</span>

          <label htmlFor="">Email</label><br />
          <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <span>{emailerr}</span>

          <label htmlFor="">Phone</label><br />
          <input type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
          <span>{phoneerr}</span>

          <label htmlFor="">BrandName</label><br />
          <input type="text" placeholder='BrandName' onChange={(e) => setBrand(e.target.value)} />
          <span>{branderr}</span>

          <label htmlFor="">GSTin</label><br />
          <input type="text" placeholder='GST' onChange={(e) => setGst(e.target.value)} />
          <span>{gsterr}</span>

          <label htmlFor="">Address</label><br />
          <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
          <span>{addresserr}</span>

          <button className='register'>
            Register
          </button>
        </form>
      </div>

      {/* ////////////////////// detail /////////////////////////////// */}

      <header className="main-info" style={{ display: detail }}>
        <div className="inner-info">
          <div className="all">
            <span className="frist-info">Name:</span>
            <span className="in">{name}</span>
          </div>
          <div className="all">
            <span className="frist-info">Email:</span>
            <span className="in">{email}</span>
          </div>
          <div className="all">
            <span className="frist-info">Phone:</span>
            <span className="in">{phone}</span>
          </div>
          <div className="all">
            <span className="frist-info">Brand:</span>
            <span className="in">{brand}</span>
          </div>
          <div className="all">
            <span className="frist-info">Address:</span>
            <span className="in">{address}</span>
          </div>
        </div>

        <button className='detail-btn' onClick={() => setupdate()}>
          Add Product <i className="ri-link"></i>
        </button>
      </header>

      {/* ////////////////////////// product add //////////////////////////////////////// */}

      <div className="main-product" style={{ display: product }}>
        <div className="flex">
          <form>
            <h2>Select Category</h2>
            <br />
            <select name="" id="select-items" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Category</option>
              <option value="electric">Electric</option>
              <option value="clothing">Clothing</option>
              <option value="games">Games</option>
              <option value="books">Books</option>
              <option value="healthcare">Healthcare</option>
            </select>

            {category === "electric" && (
              <>
                <input className='product-name-electric' type="text" placeholder="Product Name" onChange={(e) => setElectricName(e.target.value)} />
                <span>{electricnameErr}</span>

                <input type="text" placeholder="Price" onChange={(e) => setElectricPrice(e.target.value)} />
                <span>{electricpriceErr}</span>

                <input type="text" placeholder="Warranty (In Months)" onChange={(e) => setElectricWarranty(e.target.value)} />
                <span>{electricWarrantyErr}</span>

                <input type="text" placeholder="Discount (%)" onChange={(e) => setElectricDiscount(e.target.value)} />
                <span>{electricDiscountErr}</span>

                <textarea placeholder='Description' onChange={(e) => setElectricDescription(e.target.value)}></textarea>
                <span>{electricDescriptionErr}</span>

                <button type="submit" className='electricc-btn' onClick={(e) => formSubmit2(e)}>
                  Confirm
                </button>
              </>
            )}

            {category === "clothing" && (
              <>
                <input className='product-name-electric' type="text" placeholder="Product Name" onChange={(e) => setClothingName(e.target.value)} />
                <span>{clothingnameErr}</span>

                <input type="text" placeholder="Price" onChange={(e) => setClothingPrice(e.target.value)} />
                <span>{clothingpriceErr}</span>

                <input type="text" placeholder="Size" onChange={(e) => setClothingSize(e.target.value)} />
                <span>{clothingSizeErr}</span>

                <input type="text" placeholder="Discount (%)" onChange={(e) => setClothingDiscount(e.target.value)} />
                <span>{clothingDiscountErr}</span>

                <textarea placeholder='Description' onChange={(e) => setClothingDescription(e.target.value)}></textarea>
                <span>{clothingDescriptionErr}</span>

                <button type="submit" className='electricc-btn' onClick={(e) => formSubmit3(e)}>
                  Confirm
                </button>
              </>
            )}
            {category === "books" && (
              <>
                <input className='product-name-electric' type="text" placeholder="Title" onChange={(e) => setBookTitle(e.target.value)} />
                <span>{bookTitleErr}</span>

                <input type="text" placeholder="Author" onChange={(e) => setBookAuthor(e.target.value)} />
                <span>{bookAuthorErr}</span>

                <input type="text" placeholder="Price" onChange={(e) => setBookPrice(e.target.value)} />
                <span>{bookPriceErr}</span>

                <input type="text" placeholder="ISBN" onChange={(e) => setBookISBN(e.target.value)} />
                <span>{bookISBNErr}</span>

                <textarea placeholder='Description' onChange={(e) => setBookDescription(e.target.value)}></textarea>
                <span>{bookDescriptionErr}</span>

                <button type="submit" className='electricc-btn' onClick={(e) => formSubmit4(e)}>
                  Confirm
                </button>
              </>
            )}

            {/* /////games///////////// */}



            {category === "games" && (
              <>
                <input className='product-name-electric' type="text" placeholder="Name" onChange={(e) => setGameName(e.target.value)} />
                <span>{gameNameErr}</span>

                <input type="text" placeholder="Price" onChange={(e) => setGamePrice(e.target.value)} />
                <span>{gamePriceErr}</span>

                <input type="text" placeholder="Size" onChange={(e) => setGameSize(e.target.value)} />
                <span>{gameSizeErr}</span>

                <input type="text" placeholder="Category" onChange={(e) => setGameCategory(e.target.value)} />
                <span>{gameCtegoryErr}</span>

                <textarea placeholder='Description' onChange={(e) => setGameDescription(e.target.value)}></textarea>
                <span>{gameDescriptionErr}</span>

                <button type="submit" className='electricc-btn' onClick={(e) => formSubmit5(e)}>
                  Confirm
                </button>
              </>
            )}






            {/* healthcare */}



            {category === "healthcare" && (
              <>
                <input className='product-name-electric' type="text" placeholder="Name" onChange={(e) => setHealthCareName(e.target.value)} />
                <span>{healthCareNameErr}</span>

                <input type="text" placeholder="Price" onChange={(e) => setHealthCarePrice(e.target.value)} />
                <span>{healthCarePriceErr}</span>

                <textarea placeholder='Description' onChange={(e) => setHealthCareDescription(e.target.value)}></textarea>
                <span>{healthCareDescriptionErr}</span>
                

                <button type="submit" className='electricc-btn' onClick={(e) => formSubmit6(e)}>
                  Confirm
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* //////////// card ///////// */}

      <div className="product-card" style={{ display: card }}>
        <div className="card-content">

          {category === "books" && (
            <>
              <h2 className="product-name">{bookTitle}</h2>
              <p className="author">Author: {bookAuthor}</p>
              <p className="price">${bookPrice}</p>
              <p className="isbn">ISBN: {bookISBN}</p>
              <p className="description">
                {bookDescription}
              </p>
            </>
          )}

          {category === "electric" && (
            <>
              <h2 className="product-name">{electricname}</h2>
              <p className="price">${electricprice}</p>
              <p className="warranty">Warranty: {electricWarranty} months</p>
              <p className="discount">Discount: {electricDiscount}%</p>
              <p className="description">
                {electricDescription}
              </p>
            </>
          )}

          {category === "clothing" && (
            <>
              <h2 className="product-name">{clothingname}</h2>
              <p className="price">${clothingprice}</p>
              <p className="size">Size: {clothingSize}</p>
              <p className="discount">Discount: {clothingDiscount}%</p>
              <p className="description">
                {clothingDescription}
              </p>
            </>
          )}




          {category === "games" && (
            <>
              <h2 className="product-name">{gameName}</h2>
              <p className="price">${gamePrice}</p>
              <p className="size">Size: {gameSize}GB</p>
              <p className="discount">Category: {gameCtegory}</p>
              <p className="description">
                {gameDescription}
              </p>
            </>
          )}




          {category === "healthcare" && (
            <>
              <h2 className="product-name">{healthCareName}</h2>
              <p className="price">${healthCarePrice}</p>
              <p className="description">
                {healthCareDescription}
              </p>
            </>
          )}

        </div>
        <button className="add-to-cart-btn">View</button>
      </div>
    </div>
  )
}
