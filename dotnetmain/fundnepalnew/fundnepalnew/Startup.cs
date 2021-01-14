using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;

namespace fundnepalnew
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // services.AddMvc().WithRazorPagesRoot("/Prod");
            var clientSecret = Configuration["AmazonCognito:ClientSecret"];
            var clientId = Configuration["AmazonCognito:ClientId"];
            var metadataAddress = Configuration["AmazonCognito:MetaDataAddress"];
            var logOutUrl = Configuration["AmazonCognito:LogOutUrl"];
            var baseUrl = Configuration["AmazonCognito:BaseUrl"];

            services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
            })
            .AddCookie()
            .AddOpenIdConnect(options =>
            {
                options.ResponseType = "code";
                options.MetadataAddress = metadataAddress;
                options.ClientId = clientId;
                options.ClientSecret = clientSecret;
                options.GetClaimsFromUserInfoEndpoint = true;
                options.Scope.Add("email");
                options.Events = new OpenIdConnectEvents
                {
                    OnRedirectToIdentityProviderForSignOut = (context) =>
                    {
                        var logoutUri = logOutUrl;
                        logoutUri += $"?client_id={clientId}&logout_uri={baseUrl}";
                        context.Response.Redirect(logoutUri);
                        context.HandleResponse();
                        return Task.CompletedTask;
                    }
                };
            });
            services.AddRazorPages();
            services.AddMvc(option => option.EnableEndpointRouting = false).SetCompatibilityVersion(CompatibilityVersion.Latest);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseAuthentication();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseRouting();

            app.UseAuthorization();
            app.UsePathBase(new PathString("/Prod"));
            app.UseMvc();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
              
                endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            });
            //     app.Run(context =>
            //    {
            //        return context.Response.WriteAsync("Hello world");
            //    });
        }
    }
}
