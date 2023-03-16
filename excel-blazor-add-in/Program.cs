using BlazorAddIn;
using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();


//var builder = WebAssemblyHostBuilder.CreateDefault(args);
//builder.RootComponents.Add<App>("#app");

//builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

//builder.Services.AddOptions();
//builder.Services.AddSingleton<WeatherForecastService>();

//builder.Services.AddSingleton<IJSRuntime>(x => (JSInProcessRuntime)x.GetRequiredService<IJSRuntime>());
//builder.Services.AddSingleton<IDispatcher>(x => (IDispatcher)x.GetRequiredService<IJSRuntime>());

//await builder.Build().RunAsync();

