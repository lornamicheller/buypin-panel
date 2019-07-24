<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="logo" src="../assets/logomiapplogin.png">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="#"><i class="far fa-file-alt icon3"></i>Instructions</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/calendar"><i class="icon3 far fa-calendar-alt"></i>Calendar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/PatientsInfo"><i class="fas fa-align-left icon3"></i>Patients' Information</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Waitlist"><i class="fas fa-list icon3"></i>Waitlist</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Profile" style="color: #29abe2 !important"><i class="fas fa-user icon3"></i>Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="fas fa-user icon3"></i>Advertisement Opportunities
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container" style="margin-bottom: 200px;">

            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <img src="../assets/doc.jpg" style=" margin-top: 100px; margin-bottom: 30px; width: 200px; height: 200px; border-radius: 50%;">
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="icon2 fas fa-user-circle"></i>
                        </div>
                        <div class="col-11">
                            <input class="input" type="text" placeholder="First Name">
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="icon2 fas fa-user-circle"></i>
                        </div>
                        <div class="col-11">
                            <input class="input" type="text" placeholder="First Name">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="icon fas fa-venus-mars"></i>
                        </div>
                        <div class="col-11">
                            <b-form-select v-model="selected" class=" whole-form">
                                <option class="opt" :value="null">Gender</option>
                                <option class="opt" value="Male">Male</option>
                                <option class="opt" value="Female">Female</option>
                                <option class="opt" value="Female">Other</option>
                                <option class="opt" value="Female">Undisclosed</option>
                            </b-form-select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="fas fa-comment-medical icon"></i>
                        </div>
                        <div class="col-11">
                            <b-form-select v-model="selected" class=" whole-form2">
                                <option class="opt" :value="null">Specialty of Medical Provider or Welness Provider</option>
                                <option class="opt" value="Acupuncture">Acupuncture</option>
                                <option class="opt" value="Allergy">Allergy</option>
                                <option class="opt" value="Allergy and Immunology">Allergy and Immunology</option>
                                <option class="opt" value="Pediatric Allergy and Immunology">Pediatric Allergy and Immunology</option>
                                <option class="opt" value="Anesthesia">Anesthesia</option>
                                <option class="opt" value="Audiology">Audiology</option>
                                <option class="opt" value="Cardiology">Cardiology</option>
                                <option class="opt" value="Interventional Cardiology">Interventional Cardiology</option>
                                <option class="opt" value="Pediatric Cardiology">Pediatric Cardiology</option>
                                <option class="opt" value="Head and Neck Surgery">Head and Neck Surgery</option>
                                <option class="opt" value="Back Surgery">Back Surgery</option>
                                <option class="opt" value="Burns Surgery">Burns Surgery</option>
                                <option class="opt" value="General Surgery">General Surgery</option>
                                <option class="opt" value="Mohs Micrographic Surgery">Mohs Micrographic Surgery</option>
                                <option class="opt" value="Surgery or Peripheral Vascular Illness">Surgery or Peripheral Vascular Illness</option>
                                <option class="opt" value="Oncological Surgery">Oncological Surgery</option>
                                <option class="opt" value="Oral Surgery">Oral Surgery</option>
                                <option class="opt" value="Orthopedic Surgery">Orthopedic Surgery</option>
                                <option class="opt" value="Pediatric Surgery">Pediatric Surgery</option>
                                <option class="opt" value="Plastic Surgery">Plastic Surgery</option>
                                <option class="opt" value="Hands Plastic Surgery">Hands Plastic Surgery</option>
                                <option class="opt" value="Thoracic Surgery">Thoracic Surgery</option>
                                <option class="opt" value="Pediatric Critical Care">Pediatric Critical Care</option>
                                <option class="opt" value="Dentist">Dentist</option>
                                <option class="opt" value="Pediatric Dentist">Pediatric Dentist</option>
                                <option class="opt" value="Dermatology">Dermatology</option>
                                <option class="opt" value="Endocrinology">Endocrinology</option>
                                <option class="opt" value="Pediatric Endocrinology">Pediatric Endocrinology</option>
                                <option class="opt" value="Endodontics">Endodontics</option>
                                <option class="opt" value="Physiatry">Physiatry</option>
                                <option class="opt" value="Pediatric Physiatry">Pediatric Physiatry</option>
                                <option class="opt" value="Physiatry and Rehabilitation">Physiatry and Rehabilitation</option>
                                <option class="opt" value="Spinal Cord Physiatry and Rehabilitation">Spinal Cord Physiatry and Rehabilitation</option>
                                <option class="opt" value="Gastroenterology">Gastroenterology</option>
                                <option class="opt" value="Pediatric Gastroenterology">Pediatric Gastroenterology</option>
                                <option class="opt" value="General Practitioner">General Practitioner</option>
                                <option class="opt" value="Geriatrics">Geriatrics</option>
                                <option class="opt" value="Gynecology">Gynecology</option>
                                <option class="opt" value="Oncologic Gynecology">Oncologic Gynecology</option>
                                <option class="opt" value="Glaucoma">Glaucoma</option>
                                <option class="opt" value="Hematology">Hematology</option>
                                <option class="opt" value="Pediatric Hematology and Oncology">Pediatric Hematology and Oncology</option>
                                <option class="opt" value="Oncology Hematology">Oncology Hematology</option>
                                <option class="opt" value="Laboratories">Laboratories</option>
                                <option class="opt" value="Pain Management">Pain Management</option>
                                <option class="opt" value="Maxilofacial">Maxilofacial</option>
                                <option class="opt" value="Critical Care Medicine">Critical Care Medicine</option>
                                <option class="opt" value="Family Medicine">Family Medicine</option>
                                <option class="opt" value="Sports Medicine">Sports Medicine</option>
                                <option class="opt" value="General Medicine">General Medicine</option>
                                <option class="opt" value="Internal Medicine">Internal Medicine</option>
                                <option class="opt" value="Neonatal and Perinatal Medicine">Neonatal and Perinatal Medicine</option>
                                <option class="opt" value="Nuclear Medicine">Nuclear Medicine</option>
                                <option class="opt" value="Occupational Medicine">Occupational Medicine</option>
                                <option class="opt" value="Nephrology">Nephrology</option>
                                <option class="opt" value="Pneumology">Pneumology</option>
                                <option class="opt" value="Pediatric Pneumology">Pediatric Pneumology</option>
                                <option class="opt" value="Neurosurgery">Neurosurgery</option>
                                <option class="opt" value="Neurophysiology">Neurophysiology</option>
                                <option class="opt" value="Neuroophtalmology">Neuroophtalmology</option>
                                <option class="opt" value="Neurology">Neurology</option>
                                <option class="opt" value="Pediatric Neurology">Pediatric Neurology</option>
                                <option class="opt" value="Nutrition">Nutrition</option>
                                <option class="opt" value="Obstetric and gynecology">Obstetric and gynecology</option>
                                <option class="opt" value="Pediatric Odontology">Pediatric Odontology</option>
                                <option class="opt" value="Orthodontics">Orthodontics</option>
                                <option class="opt" value="Ophthalmology">Ophthalmology</option>
                                <option class="opt" value="Ear Nose and Throat">Ear Nose and Throat</option>
                                <option class="opt" value="Oncology">Oncology</option>
                                <option class="opt" value="'Optometry">Optometry</option>
                                <option class="opt" value="Orthopedics">Orthopedics</option>
                                <option class="opt" value="Pediatric Orthopedics">Pediatric Orthopedics</option>
                                <option class="opt" value="Pediatry">Pediatry</option>
                                <option class="opt" value="Periodontics">Periodontics</option>
                                <option class="opt" value="Podiatrics">Podiatrics</option>
                                <option class="opt" value="Proctology">Proctology</option>
                                <option class="opt" value="Prosthodontics">Prosthodontics</option>
                                <option class="opt" value="Psychology">Psychology</option>
                                <option class="opt" value="Psychiatric">Psychiatric</option>
                                <option class="opt" value="Pediatric Psychiatrics">Pediatric Psychiatrics</option>
                                <option class="opt" value="Geriatric Psychiatrics">Geriatric Psychiatrics</option>
                                <option class="opt" value="Chiropractic">Chiropractic</option>
                                <option class="opt" value="Radiology">Radiology</option>
                                <option class="opt" value="Retinology">Retinology</option>
                                <option class="opt" value="Physical Therapy">Physical Therapy</option>
                                <option class="opt" value="Urology">Urology</option>
                                <option class="opt" value="Pediatric Urology">Pediatric Urology</option>

                            </b-form-select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="icon fas fa-map-marker-alt"></i>
                        </div>
                        <div class="col-11">
                            <input class="input2" type="text" placeholder="Office Address">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="icon fas fa-phone"></i>
                        </div>
                        <div class="col-11">
                            <input class="input2" type="tel" placeholder="Office Phone">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="icon fas fa-fax"></i>
                        </div>
                        <div class="col-11">
                            <input class="input2" type="tel" placeholder="Office Fax">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="icon fas fa-envelope"></i>
                        </div>
                        <div class="col-11">
                            <input class="input2" type="email" placeholder="Office Email">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="icon fas fa-credit-card"></i>
                        </div>
                        <div class="col-11">
                            <b-form-select v-model="selected" class=" whole-form">
                                <option class="opt" :value="null">Accepted Insurance Providers</option>
                                <option>MCS CLASSICARE</option>
                                <option>TRIPLE S ADVANTAGE</option>
                                <option>MMM</option>
                                <option>PMC</option>
                                <option>HUMANA GOLD</option>
                                <option>FIRST CHOICE</option>
                                <option>HUMANA CHOICE</option>
                                <option>FIRST MEDICAL</option>
                                <option>MAPFRE</option>
                                <option>MCS PERSONAL</option>
                                <option>TRIPLE SALUD</option>
                                <option>CONSTELLATION</option>
                                <option>MOLINA</option>
                                <option>PLAN DE SALUD MENONITA (PSM)</option>
                            </b-form-select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="far fa-clock icon"></i>
                        </div>
                        <div class="col-11">
                            <b-form-select v-model="selected" class=" whole-form">
                                <option class="opt" :value="null">Opening Time</option>
                                <option>6:00AM</option>
                                <option>6:30AM</option>
                                <option>7:00AM</option>
                                <option>7:30AM</option>
                                <option>8:00AM</option>
                                <option>8:30AM</option>
                                <option>9:00AM</option>
                                <option>9:30AM</option>
                                <option>10:00AM</option>
                                <option>10:30AM</option>
                                <option>11:00AM</option>
                                <option>11:30AM</option>
                                <option>12:00PM</option>
                                <option>12:30PM</option>
                                <option>1:00PM</option>
                                <option>1:30PM</option>
                                <option>2:00PM</option>
                                <option>2:30PM</option>
                                <option>3:00PM</option>
                                <option>3:30PM</option>
                                <option>4:00PM</option>
                                <option>4:30PM</option>
                                <option>5:00PM</option>
                                <option>5:30PM</option>
                                <option>6:00PM</option>
                                <option>6:30PM</option>
                                <option>7:00PM</option>
                                <option>7:30PM</option>
                                <option>8:00PM</option>
                            </b-form-select>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="far fa-clock icon"></i>
                        </div>
                        <div class="col-11">
                            <b-form-select v-model="selected" class=" whole-form">
                                <option class="opt" :value="null">Closing Time</option>
                                <option>6:00AM</option>
                                <option>6:30AM</option>
                                <option>7:00AM</option>
                                <option>7:30AM</option>
                                <option>8:00AM</option>
                                <option>8:30AM</option>
                                <option>9:00AM</option>
                                <option>9:30AM</option>
                                <option>10:00AM</option>
                                <option>10:30AM</option>
                                <option>11:00AM</option>
                                <option>11:30AM</option>
                                <option>12:00PM</option>
                                <option>12:30PM</option>
                                <option>1:00PM</option>
                                <option>1:30PM</option>
                                <option>2:00PM</option>
                                <option>2:30PM</option>
                                <option>3:00PM</option>
                                <option>3:30PM</option>
                                <option>4:00PM</option>
                                <option>4:30PM</option>
                                <option>5:00PM</option>
                                <option>5:30PM</option>
                                <option>6:00PM</option>
                                <option>6:30PM</option>
                                <option>7:00PM</option>
                                <option>7:30PM</option>
                                <option>8:00PM</option>
                            </b-form-select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="fas fa-check icon"></i>
                        </div>
                        <div class="col-11">
                            <b-form-select v-model="selected" class=" whole-form">
                                <option class="opt" :value="null">Appointment Method</option>
                                <option>No Appointments (Patients are seen in the order of arrival.)</option>
                                <option>Block Appointments (Patients are seen in the order of arrival within their designated time block.)</option>
                                <option>Individual Appointments (Patients seen at the time of their schedule appointment regardless of earlier arrival of other patients.)</option>
                            </b-form-select>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-contain-center">
                        <div class="col-1">
                            <i class="icon far fa-clock"></i>
                        </div>
                        <div class="col-11">
                            <b-form-select v-model="selected" class=" whole-form">
                                <option class="opt" :value="null">Estimated Time Per Patient</option>
                                <option>5 Minutes</option>
                                <option>10 MInutes</option>
                                <option>20 Minutes</option>
                                <option>25 Minutes</option>
                                <option>1 Hour</option>
                                <option>1:15 Hour</option>
                                <option>1:30 Hour</option>
                                <option>1:45 Hour</option>
                                <option>2 Hour</option>
                            </b-form-select>
                            <button type="button" class="custome-btn btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Custome Time Per Patient</button>

                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Enter custome time per patient

                    <div class="row justify-content-center">

                      <div class="col-1">
                        <input class="input-time" maxlength="1" type="text" placeholder="0:" >
                      </div>
                      <div class="col-3">
                         <input class="input-time2" maxlength="5" type="text" placeholder="00 AM/PM" >
                      </div>

                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="save-btn btn btn-primary">Save custome time</button>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: null
            }
        },
    }
</script>

<style>
    .navbar,
    .navbar-expand-lg,
    .navbar-light,
    .bg-light {
        background:  #1e1e1e !important;
        
    }
    
    .nav-item {
        font-family: 'Poppins', sans-serif;
    }
    
    .nav-link {
        color: white !important;
        font-weight: 200;
        font-size: 17px;
        /* letter-spacing: 1px; */
          margin-left: 20px;
        margin-right: 20px;
        transition:.5s;
    }
    
     .nav-link:hover {
        color: #29abe2 !important;
        font-weight: 200;
        font-size: 16px;
        /* letter-spacing: 1px; */
        margin-left: 20px;
        margin-right: 20px;
    }

    .logo-link {
        position: absolute;
        left: 20px;
        top: 10px;
    }
    
    .logo {
        width: 70px;
        height: 50px;
        object-fit: contain;
        margin-right: 30px;
    }
    
    .navbar-toggler {
        border: 2px solid rgb(184, 184, 184) !important;
    }
    
    .fa-bars {
        color: rgb(184, 184, 184);
        font-size: 25px;
    }
    
    .input {
        width: 100%;
        border: 0;
        border-bottom: 1px solid grey;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        font-weight: 300;
        height: 40px;
        margin-top: 10px;
    }
    
    .input2 {
        width: 100%;
        border: 0;
        border-bottom: 1px solid grey;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        font-weight: 300;
        height: 40px;
        margin-top: 30px;
    }
    
    .whole-form {
        font-family: 'Poppins', sans-serif !important;
        font-size: 15px;
        font-weight: 300;
        color: grey;
        padding: 0;
        margin-top: 30px;
        border: 0;
        border-radius: 0;
        border-bottom: 1px solid grey;
    }
    
    .whole-form2 {
        font-family: 'Poppins', sans-serif !important;
        font-size: 15px;
        font-weight: 300;
        color: grey;
        padding: 0;
        margin-top: 30px;
        border: 0;
        border-radius: 0;
        border-bottom: 1px solid grey;
    }
    
    .opt {
        font-weight: 300 !important;
    }
    
    .icon {
        color: #29abe2;
        font-size: 20px;
        padding-top: 45px;
    }

     .icon2 {
        color: #29abe2;
        font-size: 20px;
        padding-top: 25px;
    }
    
    .custome-btn {
      position: absolute;
      top: 80px;
      left:  0;
      right: 0;
      margin-right: auto;
      margin-left: auto;
      width: 300px !important;
        margin-top: 20px;
        background-color: #29abe2;
        border: none;
        padding: 8px;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 15px;
        letter-spacing: 1px;
     
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        -webkit-box-shadow: 0 8px 6px -6px black;
        -moz-box-shadow: 0 8px 6px -6px black;
        box-shadow: 0 8px 6px -6px black;
    }

    .save-btn {
      background-color: #29abe2;
      border: 1px solid #29abe2;
    }

    .modal-body {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        text-align: center;
    }

    .input-time {
      width: 35px;
      text-align: center;
      border: 0;
      border-bottom: 1px solid grey;
        font-family: 'Poppins', sans-serif;

    }

    .input-time2 {
      width: 90px;
      text-align: center;
      border: 0;
      border-bottom: 1px solid grey;
        font-family: 'Poppins', sans-serif;

    }

     .icon3 {
         color: #29abe2;
        margin-right: 10px;
    }
</style>