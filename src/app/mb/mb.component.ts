import {
  AfterViewInit,
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { isScullyRunning } from '@scullyio/ng-lib';
declare let APIMaticDevPortal: any;

@Component({
  selector: 'app-mb',
  templateUrl: './mb.component.html',
  styleUrls: ['./mb.component.scss'],
})
export class MbComponent implements OnInit, AfterViewInit {
  authLabelText =
    'If you want to generate a key and try out the API, please create a free account and login.';
  previousRouteSusbription = 0;
  hasContent = true;
  @ViewChild('parent') parent: ElementRef;
  constructor(
    private elementRef: ElementRef,
    private _renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // const meta = {
    //   template: 'sdk',
    //   'secondary-nav': [
    //     { title: 'Documentation', path: '/apis/launchpad/merchant-boarding-nonpos/' },
    //     { title: 'API Specification', path: '/apis/launchpad/merchant-boarding-nonpos/api-specification' },
    //   ],
    // };
    // this.metaService.metadata.next(meta);
    // this.renderer2.appendChild(document.head, scriptCore);
    // this.loaderService.loadingContent.emit(false);
  }

  ngAfterViewInit(): void {
    const script = this._renderer.createElement('script');
    script.src = '../../../assets/matic/non-pos/static/js/portal.v7-uber.js';
    script.defer = true;
    script.onload = () => {
      APIMaticDevPortal.show({
        container: 'apimatic-widget',
        portalStyle: 'default',
        apiKey: 'xxx',
        baseUrl: './',
        enableExport: true,
        enableAnalytics: true,
        enableConsoleCalls: true,
        useProxyForConsoleCalls: true,
        languageSettings: {
          http_curl_v1: {
            sdkDownloadLink: '',
            disableSdkDownload: false,
            alpha: false,
            beta: false,
          },
          cs_net_standard_lib: {
            sdkDownloadLink: '',
            disableSdkDownload: false,
            alpha: false,
            beta: false,
          },
          java_eclipse_jre_lib: {
            sdkDownloadLink: '',
            disableSdkDownload: false,
            alpha: false,
            beta: false,
          },
          php_generic_lib_v2: {
            sdkDownloadLink: '',
            disableSdkDownload: false,
            alpha: false,
            beta: false,
          },
          python_generic_lib: {
            sdkDownloadLink: '',
            disableSdkDownload: false,
            alpha: false,
            beta: false,
          },
          ruby_generic_lib: {
            sdkDownloadLink: '',
            disableSdkDownload: false,
            alpha: false,
            beta: false,
          },
          ts_generic_lib: {
            sdkDownloadLink: '',
            disableSdkDownload: false,
            alpha: false,
            beta: false,
          },
          go_generic_lib: {
            sdkDownloadLink: '',
            disableSdkDownload: false,
            alpha: false,
            beta: false,
          },
        },
        allowedExportFormats: [
          'openapi31json',
          'openapi31yaml',
          'openapi3json',
          'openapi3yaml',
          'swagger20',
          'swaggeryaml',
          'swagger10',
          'raml',
          'raml10',
          'apiblueprint',
          'insomnia',
          'insomniayaml',
          'wadl2009',
          'wsdl',
          'apimatic',
          'postman10',
          'postman20',
        ],
        initialPlatform: 'http_curl_v1',
        themeOverrides: {
          palette: { primaryColor: '#0c7ff2', linkColor: '#00C7D4' },
          fontSource: [],
          cssStyles: {
            headings: {
              fontFamily: "'Rubik', sans-serif",
              h1: {
                fontFamily: "'Rubik', sans-serif",
                fontSize: '27px',
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: '1.3',
              },
              h2: {
                fontFamily: "'Rubik', sans-serif",
                fontSize: '24px',
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: '1.3',
              },
              h3: {
                fontFamily: "'Rubik', sans-serif",
                fontSize: '21.36px',
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: '1.3',
              },
              h4: {
                fontFamily: "'Rubik', sans-serif",
                fontSize: '18px',
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: '1.3',
              },
              h5: {
                fontFamily: "'Rubik', sans-serif",
                fontSize: '16px',
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: '1.3',
              },
              h6: {
                fontFamily: "'Rubik', sans-serif",
                fontSize: '15px',
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: '1.3',
              },
            },
            body: {
              fontFamily: "'Rubik', sans-serif",
              text1: {
                fontFamily: "'Rubik', sans-serif",
                fontSize: '15px',
                fontWeight: '400',
                fontStyle: 'normal',
                lineHeight: '1.75',
              },
              text2: {
                fontFamily: "'Rubik', sans-serif",
                fontSize: '13.33px',
                fontWeight: '400',
                fontStyle: 'normal',
                lineHeight: '1.75',
              },
              text3: {
                fontFamily: "'Rubik', sans-serif",
                fontSize: '11.85px',
                fontWeight: '400',
                fontStyle: 'normal',
                lineHeight: '1.75',
              },
            },
            code: {
              fontFamily: 'Courier Prime, monospace',
              inlineCode: {
                fontFamily: 'Courier Prime, monospace',
                fontSize: '15px',
                fontWeight: '400',
                fontStyle: 'normal',
                lineHeight: '1.75',
              },
              blockCode: {
                fontFamily: 'Courier Prime, monospace',
                fontSize: '15px',
                fontWeight: '400',
                fontStyle: 'normal',
                lineHeight: '1.75',
              },
            },
          },
        },
        codegenApiRoutes: {
          docsgen:
            'assets/matic/non-pos/static/docs/launchpad--non-pos-merchant-boarding-{template}.json',
          codegen:
            'assets/matic/non-pos/static/sdks/launchpad--non-pos-merchant-boarding-{template}.zip',
          transform:
            'assets/matic/non-pos/static/exports/launchpad--non-pos-merchant-boarding-{format}.{ext}',
        },
        renameHttpToRest: false,
      });
    };
    // this._renderer.setProperty(script, 'text', this.hmScript);
    this._renderer.appendChild(this.parent.nativeElement, script);
  }
}
