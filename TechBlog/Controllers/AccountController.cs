using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TechBlog.Models;
using MySql.Data;

namespace TechBlog.Controllers
{
    public class AccountController : Controller
    {
        //
        // GET: /Account/

        [HttpPost]
        public ActionResult Register(Account credentials)
        {
            var connectionString = ConfigurationManager.AppSettings["connectionString"];
            
            return null;
        }

        [HttpPost]
        public ActionResult SignIn(Account credentials)
        {
            var connectionString = ConfigurationManager.AppSettings["connectionString"];

            return null;
        }

    }
}
