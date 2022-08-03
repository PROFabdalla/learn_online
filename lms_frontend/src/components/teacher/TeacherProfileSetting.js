
import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
function TeacherProfileSetting(){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Profile Setting</h5>
                        <div className='card-body'>
                        <div class="mb-3 row">
                        <label for="username" class="col-sm-2 col-form-label">Teacher Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="username" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="staticEmail" value="email@example.com" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="profile_photo" class="col-sm-2 col-form-label">Profile Photo</label>
                        <div class="col-sm-10">
                            <input type="file" class="form-control" id="profile_photo" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword" />
                        </div>
                        </div> 
                        <div class="mb-3 row">
                        <label for="skills" class="col-sm-2 col-form-label">Skills</label>
                        <div class="col-sm-10">
                            <input type="textarea" class="form-control" id="skills" />
                        </div>
                        </div>
                       <button className='btn btn-primary'>Update</button>
                       
                        </div>
                    </div>
                
                </section>
            </div>
        </div>
            
    )
}

export default TeacherProfileSetting;