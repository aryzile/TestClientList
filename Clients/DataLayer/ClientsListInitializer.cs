using Clients.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Clients.DataLayer
{
    public class ClientsListDbInitializer : DropCreateDatabaseIfModelChanges<ClientsListDbContext>
    {
        protected override void Seed(ClientsListDbContext context)
        {
            var jim = new Client
            {
                Name = "Jim",
                Description = "Lawyer",
                Age = 23,
                RegistrationDate = DateTime.Now
            };

            var carl = new Client
            {
                Name = "Carl",
                Description = "Musician",
                Age = 30,
                RegistrationDate = DateTime.Now
            };

            context.Clients.Add(jim);
            context.Clients.Add(carl);
            context.SaveChanges();

            base.Seed(context);
        }
    }
}