// pages/api/login.js
import axios from 'axios';
import qs from 'qs';

export default async function handler(req, res) {
  const { idTask, param1, param2, param3, userDomain } = req.body;

  let apiUrl = '';

  if (userDomain === 'webkfc.neotelecd.com') {
    apiUrl = 'http://webkfc.neotelecd.com/neoapi/webservice.asmx/ExecuteTask03';
  } else {
    apiUrl = 'TBD';
  }

  try {
    const response = await axios.post(
      apiUrl,
      qs.stringify({
        idTask,
        param1,
        param2,
        param3
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al conectar con el servidor' });
  }
}
