using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;

namespace cognitoapi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public static IConfiguration Configuration { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            IdentityModelEventSource.ShowPII = true; 
            services.AddControllers();
             services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
                    options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
               
                })
                //Add cookie
                .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme)
                // Add openid connect
                .AddOpenIdConnect(OpenIdConnectDefaults.AuthenticationScheme, options =>
                {
                    options.ClientId = "4d6su8m8eote74k7sq2u958lqg";
                    options.ClientSecret = "1948horo335cnnvl5a98vs6lnmq9phc2o35sc0ergh2bs21t5ipt";
                    options.Authority = "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_rXGb3oncb/";
                    options.Scope.Add("openid");
                    options.Scope.Add("profile");
                    options.Scope.Add("email");
                    options.ResponseType = "code";
                   // options.Scope.Add("http://leave.letsdocoding.com/leaves.cancel");
                    //options.Scope.Add("http://leave.letsdocoding.com/leaves.apply");
                    options.SaveTokens = true;

                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        NameClaimType = "cognito:username"
                    };

                    //
                    options.Events = new OpenIdConnectEvents()
                    {
                        OnRedirectToIdentityProviderForSignOut = context =>
                        {
                            var logoutUri = $"https://fundnepal.auth.us-east-1.amazoncognito.com/logout?client_id=4d6su8m8eote74k7sq2u958lqg";
                            logoutUri += $"&logout_uri={context.Request.Scheme}://{context.Request.Host}";

                            //var postLogoutUri = context.Properties.RedirectUri;
                            //if (!string.IsNullOrEmpty(postLogoutUri))
                            //{
                            //    if (postLogoutUri.StartsWith("/"))
                            //    {
                            //        // transform to absolute
                            //        var request = context.Request;
                            //        postLogoutUri = request.Scheme + "://" + request.Host + request.PathBase + postLogoutUri;
                            //    }
                            //    logoutUri += $"&returnTo={ Uri.EscapeDataString(postLogoutUri)}";
                            //}

                            context.Response.Redirect(logoutUri);
                            context.HandleResponse();

                            return Task.CompletedTask;
                        }
                    };
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
             app.UseAuthentication();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseHttpsRedirection();

            app.UseRouting();
           
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Welcome to running ASP.NET Core on AWS Lambda");
                });
            });
        }
    }
}
