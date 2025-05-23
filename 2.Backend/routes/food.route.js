import {Router} from "express"
// import upload from "../middlewares/multer.middleware.js"
import {addFood, listFood, removeFood} from "../controllers/food.controller.js"
import upload from "../middlewares/multer.middleware.js";

const router = Router()


router.post("/add" ,upload.single("image") , addFood);
router.get("/list" , listFood );
router.post("/remove" , removeFood)
export default router