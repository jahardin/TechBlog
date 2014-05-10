using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TechBlog.Models
{
    public class Account
    {
        int Id { get; set; }
        string Email { get; set; }
        string Password { get; set; }
    }
}