import React from 'react'
import "./Addmovie.css"

function Addmovie() {
  return (
    <div className='addmovieform'>
      <form class="form-horizontal">
      <fieldset>
      <legend>Movie Submission </legend>

       <div class="form-group">
         <label class="col-md-4 control-label" for="orgincountry">COUNTRY OF ORGIN</label>  
         <div class="col-md-4">
         <input id="orgincountry" name="orgincountry" type="text" placeholder="" class="form-control input-md" />
         </div>
        </div>

    <div class="form-group">
      <label class="col-md-4 control-label" for="moviename">ENTER MOVIE NAME</label>  
      <div class="col-md-4">
       <input id="moviename" name="moviename" type="text" placeholder="enter movie name" class="form-control input-md" />
      </div>
     </div>

    <div class="form-group">
    <label class="col-md-4 control-label" for="singlebutton"></label>
    <div class="col-md-4">
      <button id="singlebutton" name="singlebutton" class="btn btn-primary">SUBMIT</button>
    </div>
    </div>

</fieldset>
</form>
    </div>
  )
}

export default Addmovie


