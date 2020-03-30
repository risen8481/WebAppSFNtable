using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppSFNtable.Models
{
    public class SOAPMOdel
    {

        public static string GetSOAPtemplate()
        {
            return "<soap:Envelope xmlns:xsi=\"http://www.w3.org\\/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"+
            "<soap:Body>" +
                    "<GetWorkPosResponse xmlns=\"http://localhost.com/apps\">"+
                      "<GetWorkPosResult>"+
                        "<GetWorkPos>"+
                          "<Year>2020</Year>"+
                          "<Month>January</Month>"+
                          "<Proforma>2</Proforma>"+
                          "<Details>detaisl</Details>"+
                        "</GetWorkPos>"+
                      "</GetWorkPosResult>" +
                    "</GetWorkPosResponse>"+
                  "</soap:Body>"+
                "</soap:Envelope> ";


        }

    }
}
