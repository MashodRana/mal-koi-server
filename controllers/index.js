import configureUserController from "./userControllers";

const configure = (app)=>{
    configureUserController(app);
}

export default configure;