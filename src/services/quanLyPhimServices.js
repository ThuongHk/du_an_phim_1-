import { GROUPID } from "../util/settings/config";
import { BasicServices } from "./basicServices";



export class QuanLyFimServices extends BasicServices {
    constructor(){
        super();
    }

    layDanhSachFim = () =>{
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    layThongTinPhim = (maPhim) =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
}

export const quanLyFimServices = new QuanLyFimServices();