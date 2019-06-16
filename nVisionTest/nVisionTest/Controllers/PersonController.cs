using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using nVisionTest.Models;

namespace nVisionTest.Controllers
{
    public class PersonController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public bool Index([Bind("FirstName,LastName,Gender,Email,Phone,Country")] Person person)
        {
            try
            {
                System.Xml.Serialization.XmlSerializer writer =
                    new System.Xml.Serialization.XmlSerializer(typeof(Person));
                TextWriter textWriter = new StreamWriter(Environment.CurrentDirectory + "//DataBase.xml", true);
                writer.Serialize(textWriter, person);
                textWriter.Close();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}