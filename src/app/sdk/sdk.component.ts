import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sdk',
  standalone: true,
  imports: [],
  templateUrl: './sdk.component.html',
  styleUrl: './sdk.component.css',
})
export class SdkComponent implements AfterViewInit {
  @ViewChild('parent') parent: ElementRef;
  hm = `<div id="apimatic-widget" style="height: 100%; width: 100%;position: relative; top: 70px;"></div>`;
  hmScript = `var script=document.createElement("script");script.src="https://dxjs.apimatic.io/v7/static/js/portal.v7.js",script.onload=function(){APIMaticDevPortal.show({container:"apimatic-widget",portalStyle:"default",codegenApiRoutes:{docsgen:"/api/api-entities/hTvfWjw6as73Bi3GUDgU_byD6fJnVXIDERkoqbysOkwOkmNx-bJe-qPJbNZCOu8U/portal-artifacts/docs/generated-file?template={template}",codegen:"/api/api-entities/hTvfWjw6as73Bi3GUDgU_byD6fJnVXIDERkoqbysOkwOkmNx-bJe-qPJbNZCOu8U/portal-artifacts/sdks/generated-file?template={template}",transform:"/api/api-entities/hTvfWjw6as73Bi3GUDgU_byD6fJnVXIDERkoqbysOkwOkmNx-bJe-qPJbNZCOu8U/portal-artifacts/specs/generated-file?format={format}",apiProxy:"https://proxy.apimatic.io/api/proxy"},apiKey:"PkUYNyvjYA7DfFBwoKTjTDYkZC7VUNCyMk095JOsAMACC5-gY0iOOR7TXKFZIjjahZUNw9YfoXfkk4KDajE_8g**",baseUrl:"https://www.apimatic.io",enableExport:!1,renameHttpToRest:!1,enableConsoleCalls:!0,useProxyForConsoleCalls:!0,initialPlatform:"php_generic_lib_v2",languageSettings:{cs_net_standard_lib:{disableSdkDownload:!1,sdkDownloadLink:""},java_eclipse_jre_lib:{disableSdkDownload:!1,sdkDownloadLink:""},php_generic_lib_v2:{disableSdkDownload:!1,sdkDownloadLink:""},python_generic_lib:{disableSdkDownload:!1,sdkDownloadLink:""},ruby_generic_lib:{disableSdkDownload:!1,sdkDownloadLink:""},ts_generic_lib:{disableSdkDownload:!1,sdkDownloadLink:""},go_generic_lib:{disableSdkDownload:!1,sdkDownloadLink:""}},allowedExportFormats:["openapi31json","openapi31yaml","openapi3json","openapi3yaml","swagger20","swaggeryaml","swagger10","raml","raml10","apiblueprint","insomnia","insomniayaml","wadl2009","wsdl","apimatic","postman10","postman20"],themeOverrides:{themeType:"cool",palette:{primaryColor:"#0c7ff2",linkColor:"#00C7D4"},fontSource:["https://fonts.googleapis.com/css?family='Rubik':100,100i,300,300i,400,400i,500,500i,700,700i,900,900i","https://fonts.googleapis.com/css?family=Courier+Prime:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"],cssStyles:{headings:{fontFamily:"",h1:{fontFamily:"'Rubik', sans-serif",fontSize:"27px",fontWeight:"500",fontStyle:"normal",lineHeight:"1.3"},h2:{fontFamily:"'Rubik', sans-serif",fontSize:"24px",fontWeight:"500",fontStyle:"normal",lineHeight:"1.3"},h3:{fontFamily:"'Rubik', sans-serif",fontSize:"21.36px",fontWeight:"500",fontStyle:"normal",lineHeight:"1.3"},h4:{fontFamily:"'Rubik', sans-serif",fontSize:"18px",fontWeight:"500",fontStyle:"normal",lineHeight:"1.3"},h5:{fontFamily:"'Rubik', sans-serif",fontSize:"16px",fontWeight:"500",fontStyle:"normal",lineHeight:"1.3"},h6:{fontFamily:"'Rubik', sans-serif",fontSize:"15px",fontWeight:"500",fontStyle:"normal",lineHeight:"1.3"}},body:{fontFamily:"'Rubik', sans-serif",text1:{fontFamily:"'Rubik', sans-serif",fontSize:"15px",fontWeight:"400",fontStyle:"normal",lineHeight:"1.75"},text2:{fontFamily:"'Rubik', sans-serif",fontSize:"13.33px",fontWeight:"400",fontStyle:"normal",lineHeight:"1.75"},text3:{fontFamily:"'Rubik', sans-serif",fontSize:"11.85px",fontWeight:"400",fontStyle:"normal",lineHeight:"1.75"}},code:{fontFamily:"Courier Prime, monospace",blockCode:{fontFamily:"Courier Prime, monospace",fontSize:"15px",fontWeight:"400",fontStyle:"normal",lineHeight:"1.75"},inlineCode:{fontFamily:"Courier Prime, monospace",fontSize:"15px",fontWeight:"400",fontStyle:"normal",lineHeight:"1.75"}}}}})},document.getElementsByTagName("head")[0].appendChild(script);`;

  constructor(
    private elementRef: ElementRef,
    private _renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {}

  // ngOnInit(): void {
  //   const script = this._renderer.createElement('script');
  //   this._renderer.setProperty(script, 'text', this.hmScript);
  //   this._renderer.setProperty(this.parent.nativeElement, 'innerHTML', script);
  //   this._renderer.setProperty(this.parent.nativeElement, 'innerHTML', this.hm);
  //   this._renderer.appendChild(this.parent.nativeElement, script);
  // }

  ngAfterViewInit(): void {
    const script = this._renderer.createElement('script');
    this._renderer.setProperty(script, 'text', this.hmScript);
    this._renderer.setProperty(this.parent.nativeElement, 'innerHTML', script);
    this._renderer.setProperty(this.parent.nativeElement, 'innerHTML', this.hm);
    this._renderer.appendChild(this.parent.nativeElement, script);
  }
}
