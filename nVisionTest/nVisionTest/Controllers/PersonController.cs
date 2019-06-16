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
        /// <summary>
        /// Access to person form
        /// </summary>
        /// <returns>Person form view</returns>
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Inserts a new person at DataBase.xml folder
        /// </summary>
        /// <param name="person">Build a new person object from User data</param>
        /// <returns>true if it was inserted, false if an error happends</returns>
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