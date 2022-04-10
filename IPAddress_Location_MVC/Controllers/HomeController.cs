using IPAddress_Location_MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Net;
using System.Web.Script.Serialization;

namespace IPAddress_Location_MVC.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index(LocationModel location)
        {
            return View(location);
        }


        public ActionResult Getgeolocation(LocationModel location)
        {
            if (ModelState.IsValid)
            {
                string url = string.Format("https://ipinfo.io/{0}/geo", location.IP);
                using (WebClient client = new WebClient())
                {
                    string json = client.DownloadString(url);
                    location = new JavaScriptSerializer().Deserialize<LocationModel>(json);
                }
            }
            return RedirectToAction("Index", location);
        }

        public ActionResult Weather()
        {
            return View();
        }

        public ActionResult Realtime()
        {
            return View();
        }

    }
}