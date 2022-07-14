import Cookie from 'js-cookie';

const GetCookie = (cookiename)=>{
    Cookie.get(cookiename);
}

export default GetCookie;