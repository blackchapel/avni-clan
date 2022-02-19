import axios from "axios";

const apiUrl = "http://localhost:5001/api/";

export const signupPost = async (formData) => {
  try {
    const {data} = await axios.post(apiUrl + "user/signup", formData);
    console.log(data);
    if (data) {
        return (data);
    }
   
    
  } catch (err) {
    throw err;
  }
};
export const loginPost = async (formData) => {
  try {
    const { data } = await axios.post(apiUrl + "user/login", formData);
    console.log(data);

    if (data) {
      return data;
    }

  } catch (err) {
    throw err;
  }
};

export const verifySignupOtp = async (formData, token) => {
  try {
    console.log(token);
    const { data } = await axios.put(apiUrl + "user/otp", formData, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }

    });

    console.log(data);
    if (data)
    {return data};
  } catch (err) {
    throw err;
  }
};


export const setUpAxiosHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
}


// let ip = "";
// const getData = async () => {
//   const res = await axios.get('https://geolocation-db.com/json/')
//   ip = res.data.IPv4;
// }

export const getAirInfo = async () => {
  
  try {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res);
    // const ip = res.data.IPv4;
    const {data} = await axios.get(apiUrl + "data/climate", res.data.IPv4);
    // console.log(data);
    if (data) {
        return (data);
    }
   
    
  } catch (err) {
    throw err;
  }
}

// EVENTS

export const createEvent = async (formData, token) => {
  try {
    console.log(token);
    const { data } = await axios.post(apiUrl + "event/create", formData, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }

    });
    console.log(data);
    if (data)
    {return data};
  } catch (err) {
    throw err;
  }
};


export const getEvents = async () => {
  try {
    
    const {data} = await axios.get(apiUrl + "event/view");
    console.log(data, "api");
    if (data) {
        return (data);
    }
   
    
  } catch (err) {
    throw err;
  }
}

export const joinEvent = async (formData, token) => {
  try {
    
    const { data } = await axios.put(apiUrl + "event/join", formData, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }

    });

    console.log(data);
    if (data)
    {return data};
  } catch (err) {
    throw err;
  }
};

export const startEvent = async (formData, token) => {
  try {
    
    const { data } = await axios.put(apiUrl + "event/start", formData, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }

    });

    console.log(data);
    if (data)
    {return data};
  } catch (err) {
    throw err;
  }
};

export const endEvent = async (formData, token) => {
  try {
    
    const { data } = await axios.put(apiUrl + "event/end", formData, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }

    });

    console.log(data);
    if (data)
    {return data};
  } catch (err) {
    throw err;
  }
};

export const getLeaderboard = async () => {
  try {
    
    const {data} = await axios.get(apiUrl + "leaderboard");
    console.log("leaderboard");
    console.log(data);
    if (data) {
        return (data);
    }
   
    
  } catch (err) {
    throw err;
  }
}

export const getDashboard = async () => {
  try {
    
    const {data} = await axios.get(apiUrl + "dashboard");
    console.log("dashboard");
    console.log(data);
    if (data) {
        return (data);
    }
   
    
  } catch (err) {
    throw err;
  }
}
// {
//   upcoming: [ { event 1 }, { event 2 }, ...],
//   ongoing: [ { event 1 }, { event 2 }, ...]
// }

