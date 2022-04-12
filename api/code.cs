using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Windows.Forms;
using System.Net;
using System.Web;
using System.Text;  // For class Encoding
using System.IO; 

namespace Code
{       
    public class Program
    {
        public static void Main()
        {
            string authKey = "f4b82730710ac438ea9cd09236c9e54d";
                
                string mobileNumber = "8305021065";
                
                string senderId = "SRTSIN";
                
                string message = HttpUtility.UrlEncode("Test message");
                
                StringBuilder sbPostData = new StringBuilder();
                sbPostData.AppendFormat("authkey={0}", authKey);
                sbPostData.AppendFormat("&mobiles={0}", mobileNumber);
                sbPostData.AppendFormat("&message={0}", message);
                sbPostData.AppendFormat("&sender={0}", senderId);
                sbPostData.AppendFormat("&route={0}", "B");
                try
                {
                    
                    string sendSMSUri = "https://sms.bulksmsserviceproviders.com/api/send_http.php";
                    
                    HttpWebRequest httpWReq = (HttpWebRequest)WebRequest.Create(sendSMSUri);
                    
                    UTF8Encoding encoding = new UTF8Encoding();
                    byte[] data = encoding.GetBytes(sbPostData.ToString());
                    
                    httpWReq.Method = "POST";
                    httpWReq.ContentType = "application/x-www-form-urlencoded";
                    httpWReq.ContentLength = data.Length;
                    using (Stream stream = httpWReq.GetRequestStream())
                    {
                        stream.Write(data, 0, data.Length);
                    }
                    
                    HttpWebResponse response = (HttpWebResponse)httpWReq.GetResponse();
                    StreamReader reader = new StreamReader(response.GetResponseStream());
                    string responseString = reader.ReadToEnd();
    
                    
                    reader.Close();
                    response.Close();
                }
                catch (SystemException ex)
                {
                    MessageBox.Show(ex.Message.ToString());
                }
        }
    }
}