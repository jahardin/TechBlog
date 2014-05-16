using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TechBlog.Models
{
    public class BlogTemplate1 
    {
        string Topic {get; set; }
        string Content { get; set; }
        string User {get; set;}
        DateTime TimePosted { get; set; }

    }
}
