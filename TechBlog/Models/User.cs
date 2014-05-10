using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TechBlog.Models
{
    public class User
    {
        int Id { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        DateTime DateOfBirth { get; set; }
        Uri ImageUrl { get; set; }
        int AccountId { get; set; }
    }
}