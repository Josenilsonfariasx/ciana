/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const axios = require('axios')

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Olá, bem-vindo ao Observatório 2024! Peça a sua análise.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PartIndustriaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PartIndustriaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A participação da indústria no emprego formal em Santa Catarina é de 34.5% e 21.2% no Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PorcentagemPibIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PorcentagemPibIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A porcentagem da indústria catarinense no PIB do estado é de 22.9% em comparação com 14.7% do Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const QuantidadeIndustriaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuantidadeIndustriaIntent';
    },
    handle(handlerInput) {
        const speakOutput = '54.779 indústrias catarinense.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ManufaturaPibIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ManufaturaPibIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A participação da manufatura no PIB do estado de santa catarina é de 19,6% ante 12,3% do Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const TerritorioSCIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TerritorioSCIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Santa Catarina possui 1.1% em relação ao território do Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PorcentagemPopulacaoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PorcentagemPopulacaoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Santa Catarina possui 3.4% da população do Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PibScBrIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PibScBrIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A participação de Santa Catarina é de 4,6% do PIB do Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const RankingIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RankingIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Santa Catarina é a 6ª maior economia do Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PaisesManufaturaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PaisesManufaturaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Bélgica, Suíça, Áustria e Alemanha.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const EstadosExpoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EstadosExpoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Santa Catarina é o 10º estado exportador do Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const EstadosImportadoresIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EstadosImportadoresIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Santa Catarina é o 2º estado importador do Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const GetRemoteDataHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'IndustriaObsIntent';
    },
    handle(handlerInput) {
        
        const axios = require('axios');
        
        return axios.get('https://bigdata-integr.azurewebsites.net/api/bigdata-integr?code=w24qmeiar0mVhFSrSfIVcy5sdVJaKDn079xq0UlP2QemdZQDmJtUrw==&key=425047909561b57a1520663536dfc272')
            .then(response => {
                
                var industrias = ''
                
                for (var i = 0; i < response.data.length; i++) {
                    industrias += response.data[i].nm_sc_competitiva + ', '
                }
                
               const listaIndustrias = response.data.map(item => item.nm_sc_competitiva)
                const speakOutput = `Os setores da industria catarinense são: ${listaIndustrias}`
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            })
            .catch(err => {
                const speakOutput = 'Houve um problema na requisição';
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .getResponse();
            })
        
    }
};

const GetEmpregoDataHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EmpregoObsIntent';
    },
    handle(handlerInput) {
        
        const axios = require('axios');
        
        return axios.get('https://bigdata-integr.azurewebsites.net/api/bigdata-integr?code=w24qmeiar0mVhFSrSfIVcy5sdVJaKDn079xq0UlP2QemdZQDmJtUrw==&key=425047909561b57a1520663536dfc272')
            .then(response => {
                
                var emprego = 0
                
                for (var i = 0; i < response.data.length; i++) {
                    emprego += response.data[i]['avg(nu_saldo)']
                }
                
                emprego = emprego.toString()
                
                const speakOutput = `${emprego} empregos na indústria catarinense.`
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            })
            .catch(err => {
                const speakOutput = 'Houve um erro';
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .getResponse();
            })
        
    }
};

const GetSaldoMetalDataHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SaldoMetalIntent';
    },
    handle(handlerInput) {
        
        const axios = require('axios');
        
        return axios.get('https://bigdata-integr.azurewebsites.net/api/bigdata-integr?code=w24qmeiar0mVhFSrSfIVcy5sdVJaKDn079xq0UlP2QemdZQDmJtUrw==&key=425047909561b57a1520663536dfc272')
            .then(response => {
                
                var emprego = response.data[0]['avg(nu_saldo)']
                emprego = emprego.toString()
                
                const speakOutput = `${emprego} empregos no setor de metalmecânica e metarlugia.`
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            })
            .catch(err => {
                const speakOutput = 'Houve um erro';
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .getResponse();
            })
        
    }
};

const GetSaldoProdutosDataHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SaldoProdutosIntent';
    },
    handle(handlerInput) {
        
        const axios = require('axios');
        
        return axios.get('https://bigdata-integr.azurewebsites.net/api/bigdata-integr?code=w24qmeiar0mVhFSrSfIVcy5sdVJaKDn079xq0UlP2QemdZQDmJtUrw==&key=425047909561b57a1520663536dfc272')
            .then(response => {
                
                var emprego = response.data[1]['avg(nu_saldo)']
                emprego = emprego.toString()
                
                const speakOutput = `${emprego} empregos no setor de produtos químicos e plástico.`
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            })
            .catch(err => {
                const speakOutput = 'Houve um erro';
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .getResponse();
            })
        
    }
};

const GetSaldoEquipamentosDataHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SaldoEquipamentosIntent';
    },
    handle(handlerInput) {
        
        const axios = require('axios');
        
        return axios.get('https://bigdata-integr.azurewebsites.net/api/bigdata-integr?code=w24qmeiar0mVhFSrSfIVcy5sdVJaKDn079xq0UlP2QemdZQDmJtUrw==&key=425047909561b57a1520663536dfc272')
            .then(response => {
                
                var emprego = response.data[2]['avg(nu_saldo)']
                emprego = emprego.toString()
                
                const speakOutput = `${emprego} empregos no setor de equipamentos elétricos.`
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            })
            .catch(err => {
                const speakOutput = 'Houve um erro';
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .getResponse();
            })
        
    }
};

const GetSaldoAlimentosDataHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SaldoAlimentosIntent';
    },
    handle(handlerInput) {
        
        const axios = require('axios');
        
        return axios.get('https://bigdata-integr.azurewebsites.net/api/bigdata-integr?code=w24qmeiar0mVhFSrSfIVcy5sdVJaKDn079xq0UlP2QemdZQDmJtUrw==&key=425047909561b57a1520663536dfc272')
            .then(response => {
                
                var emprego = response.data[3]['avg(nu_saldo)']
                emprego = emprego.toString()
                
                const speakOutput = `${emprego} empregos no setor de alimentos e bebida.`
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            })
            .catch(err => {
                const speakOutput = 'Houve um erro';
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .getResponse();
            })
        
    }
};

const GetSaldoIndustriaDataHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SaldoIndustriaIntent';
    },
    handle(handlerInput) {
        
        const axios = require('axios');
        
        return axios.get('https://bigdata-integr.azurewebsites.net/api/bigdata-integr?code=w24qmeiar0mVhFSrSfIVcy5sdVJaKDn079xq0UlP2QemdZQDmJtUrw==&key=425047909561b57a1520663536dfc272')
            .then(response => {
                
                var emprego = response.data[4]['avg(nu_saldo)']
                emprego = emprego.toString()
                
                const speakOutput = `${emprego} empregos na indústria diversa.`
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            })
            .catch(err => {
                const speakOutput = 'Houve um erro';
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .getResponse();
            })
        
    }
};

const GetTaxaDesocupLastMonthDataHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'IndiceDesocupIntent';
    },
    handle(handlerInput) {
        
        const axios = require('axios');
        
        return axios.get('https://bigdata-integr.azurewebsites.net/api/bigdata-integr?code=w24qmeiar0mVhFSrSfIVcy5sdVJaKDn079xq0UlP2QemdZQDmJtUrw==&key=1940df1cd5b3bb9b15079d42d9b9a013')
            .then(response => {
                
                var index = response.data.length - 1
                
                var taxaLastMonthBR = response.data[index]['sum(desocup_mes_br)'] * 100
                taxaLastMonthBR = taxaLastMonthBR.toString()
                
                var taxaLastMonthSC = response.data[index]['sum(desocup_mes_sc)'] * 100
                var factor = Math.pow(10, 1)
                taxaLastMonthSC = Math.round(taxaLastMonthSC * factor) / factor;

                taxaLastMonthSC = taxaLastMonthSC.toString()
                
                const speakOutput = `Taxa de desemprego de Santa Catarina é de ${taxaLastMonthSC}% em comparação com ${taxaLastMonthBR}% do Brasil.`
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            })
            .catch(err => {
                const speakOutput = 'Houve um erro';
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .getResponse();
            })
        
    }
};

const GetSaldoEmpregoDataHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SaldoEmpregoIntent';
    },
    handle(handlerInput) {
        
        const axios = require('axios');
        
        return axios.get('https://bigdata-integr.azurewebsites.net/api/bigdata-integr?code=w24qmeiar0mVhFSrSfIVcy5sdVJaKDn079xq0UlP2QemdZQDmJtUrw==&key=425047909561b57a1520663536dfc272')
            .then(response => {
                
                const setor = Alexa.getSlotValue(handlerInput.requestEnvelope, 'setor');
                
                var saldoEmprego = ''
                
                if (setor === 'metalmecanica e metalurgia') {
                    saldoEmprego = response.data[0]['avg(nu_saldo)']
                } else if (setor === 'produtos quimicos e plasticos') {
                    saldoEmprego = response.data[1]['avg(nu_saldo)']
                } else if (setor === 'equipamentos eletricos') {
                    saldoEmprego = response.data[2]['avg(nu_saldo)']
                } else if (setor === 'alimentos e bebidas') {
                    saldoEmprego = response.data[3]['avg(nu_saldo)']
                } else if (setor === 'industria diversa') {
                    saldoEmprego = response.data[4]['avg(nu_saldo)']
                } else {
                    saldoEmprego = 0
                }
                
                saldoEmprego = saldoEmprego.toString()
                
                const speakOutput = `${saldoEmprego} empregos.`
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            })
            .catch(err => {
                const speakOutput = 'Houve um erro';
                
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .getResponse();
            })
        
    }
};

const EmpregoIndustriaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EmpregoIndustriaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'O número de empregos formais na indústria catarinense é de 907.000 em comparação com 2.7 milhões de empregos no Brasil.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Como posso te ajudar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Até mais!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Não entendi sua requisição.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        PartIndustriaIntentHandler,
        PorcentagemPibIntentHandler,
        ManufaturaPibIntentHandler,
        QuantidadeIndustriaIntentHandler,
        TerritorioSCIntentHandler,
        PorcentagemPopulacaoIntentHandler,
        PibScBrIntentHandler,
        PaisesManufaturaIntentHandler,
        GetRemoteDataHandler,
        EstadosExpoIntentHandler,
        EstadosImportadoresIntentHandler,
        GetEmpregoDataHandler,
        RankingIntentHandler,
        GetSaldoMetalDataHandler,
        GetSaldoProdutosDataHandler,
        GetSaldoEquipamentosDataHandler,
        GetSaldoAlimentosDataHandler,
        GetSaldoIndustriaDataHandler,
        GetTaxaDesocupLastMonthDataHandler,
        GetSaldoEmpregoDataHandler,
        EmpregoIndustriaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();