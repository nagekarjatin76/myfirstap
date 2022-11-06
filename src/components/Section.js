function Section() {

    return (

        <>



            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg?w=1380&t=st=1665408885~exp=1665409485~hmac=11c0abb3ba42448aaee6c965742011f90c4dd09c274c5fa92325feeff4d72aeb" className="d-block w-100" width="100%" height="550px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/premium-vector/food-delivery-mobile-phone-online-food-order-e-commerce-concept_226040-35.jpg?w=2000" className="d-block w-100" width="100%" height="550px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/premium-vector/set-food-social-media-templateswith-black-white-yellow-color_241598-10.jpg?w=1380" className="d-block w-100" width="100%" height="550px" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




            <h1 style={{ textAlign: "center", marginTop: "25px" }}><mark><b>THERE IS SO MUCH TO EAT</b></mark></h1>

            <div className="container">
                <div className="row" >
                    <div class="col-md-3" margin-top="50px">
                        <div class="card">
                            <img src="https://us.123rf.com/450wm/f1digitals/f1digitals2103/f1digitals210301200/166415200-punjabi-man-is-holding-fry-pan-in-hand-vector-graphic-illustration-individually-on-a-white-backgroun.jpg?ver=6" height="100%" width="100%" />
                            <div class="card-bottom">
                                <p class="h4 m-0 mt-2 text-center">PUNJABI</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img src="http://flyereats.in/upload/1641889297-1b.jpg" height="90%" width="100%" />
                            <div class="card-bottom">
                                <p class="h4 m-0 mt-2 text-center">SOUTH INDIAN</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSe1lxz_8B8LJi85R_n4cTGphlVvtAue1xX792d5HKOPudO5HMGTteVmvBJhDWBMHnNPg&usqp=CAU" height="100%" width="100%" />
                            <div class="card-bottom">
                                <p class="h4 m-0 mt-2 text-center">MEXICAN</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img src="https://us.123rf.com/450wm/f1digitals/f1digitals1905/f1digitals190500103/123773088-vector-cartoon-illustration-of-a-rajasthani-man-selling-chili-powder-isolated-on-white-background-.jpg?ver=6" height="100%" width="100%" />
                            <div class="card-bottom">
                                <p class="h4 m-0 mt-2 text-center">GUJARATI</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>FOOD MENU</option>
                    <option value="1">Punjabi</option>
                    <option value="2">South-Indian</option>
                    <option value="3">Mexican</option>
                    <option value="2">Gujarati</option>
                </select>
                <label for="floatingSelect">Low cost ..High Quality</label>
            </div>


            {/* <h1 style={{ textAlign: "center" }}><mark><b>FAST DELIVERY FOOD</b></mark></h1> */}

            <img style={{ paddingLeft: "450px" }} src="https://media.istockphoto.com/vectors/grunge-black-on-time-delivery-word-sqaure-rubber-seal-stamp-on-white-vector-id1364591618?s=612x612" class="img-fluid" alt="..." />


            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Burger (₹149)</h5>
                            <p className="card-text">Amount Per 100 grams Calories 295</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 18 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pizza ₹349</h5><delete>₹469</delete>
                            <p className="card-text">Amount Per 1 pizza (853 g) Calories 2269</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 13 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://media.istockphoto.com/photos/punjabi-samosa23-picture-id502663991?k=20&m=502663991&s=612x612&w=0&h=jC4KxvXhgWxueNgtMJar4BYTcVN_NQH1k-qVMsJ_eCE=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Samosa(₹69)</h5>
                            <p className="card-text">Energy: 262 Calories</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>

            <img style={{ paddingLeft: "450px" }} src="" class="img-fluid" alt="..." />

            <h1 style={{ textAlign: "center", marginTop: "25px" }}><mark><b>PUNJABI FOOD</b></mark></h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="row">
                    <div className="jatin">
                        <div className="card2">
                            <img src="https://img.freepik.com/free-photo/mutton-kheema-pav-indian-spicy-minced-meat-served-with-bread-kulcha-garnished-with-green-peas-moody-background-selective-focus_466689-74107.jpg?w=996&t=st=1665409862~exp=1665410462~hmac=81f2db8977ef332315d876fcc63fe86a4f307869326f1746f4633e8df93486b5" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Bhaji Paav  ₹149</h5>
                                <p className="card-text">Food energy (per serving): 400 calories kcal.</p>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76134.jpg?w=996&t=st=1665409947~exp=1665410547~hmac=1bbeb2aed931a24ac87ec9b68584e63b801e4792659cf291fed5441b185faaea" className="card-img-top" height="250px" alt="..." />
                        <div className="card-body">
                            <h5 className="paratha">Paratha  ₹69</h5>
                            <p className="card-text">One paratha (whole wheat paratha): 126 calories.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://img.freepik.com/premium-photo/chole-bhature-chick-pea-curry-fried-puri-served-terracotta-crockery-white-background-selective-focus_466689-24956.jpg?w=996" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chole Bhature  ₹249</h5>
                            <p className="card-text">Energy: 427 Calories.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="j2">
                <h1 style={{ textAlign: "center", marginTop: "25px", marginBottom: "25px" }}><mark><b>SOUTH-INDIAN  FOOD</b></mark></h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card2">
                        <div className="jatin">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdxuAiD-lFcl-gaxzG-IVrMXb7V9GM-nnfhAw7i_x2RLvNCbDbnAZ-biCK-S6Ym9cBIU&usqp=CAU" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Masala Dhossa ₹89</h5>
                                <p className="card-text">One Mysore Masala Dosa gives 539 calories.</p>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7Suw8Wc7NuaRmC2KcviYq_-LE7zeUQ2RAsXh9yBhq_jMZJowgaXANknqIcg0ebs1_e4&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Idli  ₹59</h5>
                            <p className="card-text">One Idli: 39 calories.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJZ3E55DNjIaCj1zEi7s7gy2TcUJNgm1l65TRiMkyhOAMkyiErbeu83jeJfQe1fkDecY&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Paal Payasam  ₹249</h5>
                            <p className="card-text">Whole Dishe: 408 Calories.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="j1">
                <h1 style={{ textAlign: "center", marginTop: "25px", marginBottom: "25px" }}><mark><b>GUJARATI FOOD</b></mark></h1>
            </div>


            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card2">
                        <div className="jatin2">
                            <img src="https://img.freepik.com/premium-photo/gujarati-khaman-dhokla-made-using-chana-dal-served-with-green-chutney-selective-focus_466689-71723.jpg?w=2000" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dhokala ₹69</h5>
                                <p className="card-text">One piece of Khaman Dhokla : 81 calories.</p>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button class="btn btn-primary me-md-2" type="button">Order Now </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/Preethi_Kitchen_Appliances_Tava_Handvo_Tomato_Garlic_Chutney_recipe_video-2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Handvo  ₹129</h5>
                            <p className="card-text">One Handvo: 216 calories.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Order Now </button>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://img.freepik.com/premium-photo/crispy-fafda-with-sweet-jalebi-is-indian-snack-most-popular-gujarat-selective-focus_466689-71789.jpg?w=2000" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Fafda Jalebi  ₹249</h5>
                            <p className="card-text">Whole Dishe: 750 Calories.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Order Now </button>


                            </div>

                        </div>

                    </div>


                </div>

            </div>
            <div className="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <div className="j4">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2" type="button">Submit </button>
                    </div>
                </div>
                <label for="floatingTextarea">How did you like our dishes?,,,</label>

            </div>

            <div className="j3">
                <h1>
                    <b><mark> Latest Blog</mark></b>
                </h1>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2" >
                        <img src="https://as1.ftcdn.net/v2/jpg/03/77/30/16/1000_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7.jpg"
                            class="img-thumbnail" />
                    </div>
                    <div class="col-md-4" >
                        <h2></h2>
                        <p>
                        This resturant over the years has been very famous for its Pav bhaji.
                            10 of 9 tables would have Pav bhaji on their tables ordered.
                            Over so many years the taste has been the same.
                            You surely will have to wait long on Sunday and public holiday
                        </p>
                        <div class="stars">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>

                        </div>

                    </div>

                    <div class="col-md-2" >
                        <img src="https://as1.ftcdn.net/v2/jpg/03/96/78/06/1000_F_396780640_mO95sH5ITG2sD3RdOd7fh3olapEkupXW.jpg"
                            class="img-thumbnail" />
                    </div>
                    <div class="col-md-4" >
                        <h2></h2>
                        <p>
                        I order from dosa corner almost every week. The food is good, they read and incorporate the instructions which is big plus since I have a 3 yo kid who is choosy about food. I like their mysore dosa and rava dosa. I always order stuffing on side to avoid it making the dosa soggy.

                        </p>
                        <div class="stars">
                            <div class="stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2" >
                        <img src="https://as2.ftcdn.net/v2/jpg/02/97/24/51/1000_F_297245133_gBPfK0h10UM3y7vfoEiBC3ZXt559KZar.jpg"
                            class="img-thumbnail" />
                    </div>
                    <div class="col-md-4" >

                        <p>
                        I stumbled upon this movie last week and figured I would give it a go. Boy am I thrilled I did. This was my first foray into Bollywood but it won't be my last. Not being fan of subtitles and only speaking English I was a little worried but fear not my English speaking brethren. The stars are very likable, Nikita is a beautiful actress and she did a great job. Kunal was very believable too. They made a great couple and I hope they make other movies together. The story kept me guessing straight till the end. I won't give anything away but if you find yourself looking for something new and refreshing this is the Pizza for you
                        </p>
                        <div class="stars">
                            <div class="stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>

                            </div>
                        </div>

                    </div>

                    <div class="col-md-2" >
                        <img src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=996&t=st=1665639135~exp=1665639735~hmac=18f124a8a1ed3c0f8443e8abb97987553ffe1158f6cfce656e3580ce7fc134e8"
                            class="img-thumbnail" />
                    </div>
                    <div class="col-md-4" >
                        <h2></h2>
                        <p>

                            I'm planning on adding this as a breakfast and snack item must have list at my home. So easy to make and so worth every Rupee you shell down for it. Each member of our family enjoyed it. Do have it with green chilies tadka, chutneys to add that professional edge for the appeal while serving to guests. I am planning to add this to permanent breakfast made-easy's list at my home especially keeping in mind the cost I got it for here. :-
                        </p>
                        <div class="stars">
                            <div class="stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>


    )
}

export default Section;