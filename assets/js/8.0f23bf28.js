(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{523:function(e,t,n){e.exports=n.p+"assets/img/image1.0bceec5b.png"},524:function(e,t,n){e.exports=n.p+"assets/img/image2.530ed160.png"},525:function(e,t,n){e.exports=n.p+"assets/img/image3.c52ad8ea.png"},526:function(e,t,n){e.exports=n.p+"assets/img/image4.8b8e6f36.png"},527:function(e,t,n){e.exports=n.p+"assets/img/image5.fe0332d1.png"},528:function(e,t,n){e.exports=n.p+"assets/img/image6.8b6a567b.png"},529:function(e,t,n){e.exports=n.p+"assets/img/image7.00350868.png"},530:function(e,t,n){e.exports=n.p+"assets/img/image8.9bf5e8cf.png"},531:function(e,t,n){e.exports=n.p+"assets/img/image9.4173edab.png"},551:function(e,t,n){"use strict";n.r(t);var a=n(6),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("strong",[e._v("Double Graph Based Reasoning for Document-level Relation Extraction")])]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("The task of identifying semantic relations between entities from text, namely relation extraction (RE), plays a crucial role in a variety of knowledge-based applications. Previous methods focus on sentence-level RE, which predicts relations among entities in a single sentence. However, sentence-level RE models suffer from an inevitable limitation – they fail to recognize relations between entities across sentences. Hence, "),a("strong",[e._v("extracting relations at the document-level is necessary")]),e._v(" for a holistic understanding of knowledge in text.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(523),alt:"image1"}})]),e._v(" "),a("h2",{attrs:{id:"challenges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[e._v("#")]),e._v(" Challenges")]),e._v(" "),a("p",[e._v("There are several major challenges in effective relation extraction at the document-level. The figure below shows an example.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:n(524),width:"50%",height:"50%"}})]),e._v(" "),a("ol",[a("li",[e._v("The subject and object entities involved in a relation may appear in different sentences, e.g., the relation between "),a("strong",[e._v("Baltimore")]),e._v(" and "),a("strong",[e._v("U.S.")]),e._v(", as well as "),a("strong",[e._v("Eldersburg")]),e._v(" and "),a("strong",[e._v("U.S")]),e._v(".")]),e._v(" "),a("li",[e._v("The same entity may be mentioned multiple times in different sentences.")]),e._v(" "),a("li",[e._v("The identification of many relations requires techniques of logical reasoning, e.g., "),a("strong",[e._v("Eldersburg")]),e._v(" belongs to "),a("strong",[e._v("U.S.")]),e._v(" because "),a("strong",[e._v("Eldersburg")]),e._v(" is located in "),a("strong",[e._v("Maryland")]),e._v(", and "),a("strong",[e._v("Maryland")]),e._v(" belongs to "),a("strong",[e._v("U.S.")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"our-proposed-model-gain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#our-proposed-model-gain"}},[e._v("#")]),e._v(" Our proposed Model: GAIN")]),e._v(" "),a("p",[e._v("To tackle the challenges, we propose "),a("strong",[e._v("G")]),e._v("raph "),a("strong",[e._v("A")]),e._v("ggregation-and-"),a("strong",[e._v("I")]),e._v("nference "),a("strong",[e._v("N")]),e._v("etwork ("),a("strong",[e._v("GAIN")]),e._v("). GAIN consists of double graph, i.e., mention-level graph and entity-level graph. Our intuitions are that: 1) Mention-level graph can model the interactions among mentions across sentences, so that global context can be better captured. 2) Entity-level graph can conduct logical reasoning for certain entity pairs over entities.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(525),alt:"image3"}})]),e._v(" "),a("p",[e._v("Our model contains the following four modules.")]),e._v(" "),a("p",[a("strong",[e._v("Encoding module")]),e._v(". Tokens of the document is represented as the concatenation of word embedding, entity type embedding, and entity id embedding. Then they are fed into the encoder (e.g., LSTM or BERT) to obtain the contextualized representation.")]),e._v(" "),a("p",[a("strong",[e._v("Mention-level Graph Aggregation Module")]),e._v(". To model the document-level information and interactions among mentions, a heterogeneous mention-level graph is constructed followed by graph convolution network. The graph has two kinds of nodes: 1) "),a("em",[e._v("Mention node")]),e._v(", which refers to one specific entity mention in the document; 2) "),a("em",[e._v("Document node")]),e._v(", which aims to model the overall document information and serves as a pivot for interactions among different mentions. Three types of edges are leveraged to connect these nodes:")]),e._v(" "),a("ul",[a("li",[a("p",[a("em",[e._v("Intra-Entity Edge")]),e._v(": Mentions referring to the same entity are fully connected with intra-entity edges. In this way, the interaction among different mentions of the same entity could be modeled.")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Inter-Entity Edge")]),e._v(": Two mentions of different entities are connected with an inter-entity edge if they co-occur in a single sentence. In this way, interactions among entities could be modeled by co-occurrences of their mentions.")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Document Edge")]),e._v(": All mentions are connected to the document node with the document edge. With such connections, the document node can attend to all the mentions and enable interactions between document and mentions. Besides, the distance between two mention nodes is at most two with the document node as a pivot. Therefore long-distance dependency can be better modeled.")])])]),e._v(" "),a("p",[a("strong",[e._v("Entity-level Graph Inference Module")]),e._v(". To explicitly capture the logic reasoning chain of entity pairs over all the entities, we constuct an entity-level graph by merging mention nodes referring to the same entity in the mention-level graph into an entity node. Concretely, to model the logical chain between a certain entity pair, we find out all the two-hop paths between them, in which a path is represented as the concatenation of both forward and backward edges. Then we levelrage attention mechanism to aggregate multiple paths into a reasoning-aware path representation.")]),e._v(" "),a("p",[a("strong",[e._v("Classification Module")]),e._v(". Since a pair of entities may contain multiple relations, we formulate the task as a multi-label classification. Concretely, we first concatenate the entity, document, and path representations. Then we feed it into a MLP and use sigmoid function to predict the score for all possible relations.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(526),alt:"image4"}})]),e._v(" "),a("h2",{attrs:{id:"experiments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experiments"}},[e._v("#")]),e._v(" Experiments")]),e._v(" "),a("h3",{attrs:{id:"dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[e._v("#")]),e._v(" Dataset")]),e._v(" "),a("p",[e._v("We evaluate our model on DocRED (Yao et al., 2019), a large-scale human-annotated dataset for document-level RE constructed from Wikipedia and Wikidata. DocRED has 96 relations types, 132, 275 entities, and 56, 354 relational facts in total. Documents in DocRED contain about 8 sentences on average, and more than 40.7% relation facts can only be extracted from multiple sentences. Moreover, 61.1% relation instances require various inference skills such as logical inference (Yao et al., 2019). we follow the standard split of the dataset, 3, 053 documents for training, 1, 000 for development and 1, 000 for test.")]),e._v(" "),a("h3",{attrs:{id:"main-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-results"}},[e._v("#")]),e._v(" Main Results")]),e._v(" "),a("p",[e._v("We compare the performance among the following models:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("CNN")]),e._v(", "),a("strong",[e._v("LSTM")]),e._v(", "),a("strong",[e._v("BiLSTM")]),e._v(", "),a("strong",[e._v("Context-Aware")]),e._v(", "),a("strong",[e._v("BERT-RE")]),e._v(", "),a("strong",[e._v("RoBERTa-RE")]),e._v(", "),a("strong",[e._v("CorefBERT-RE")]),e._v(", "),a("strong",[e._v("CorefRoBERTa-RE")]),e._v(": Using different encoding mechanisms to simply encode the whole document and extract relations.")]),e._v(" "),a("li",[a("strong",[e._v("HIN-Glove")]),e._v(", "),a("strong",[e._v("HIN-BERT")]),e._v(": Extracting relations through a hierarchical interaction network with either Glove embedding or BERT.")]),e._v(" "),a("li",[a("strong",[e._v("GAT")]),e._v(", "),a("strong",[e._v("GCNN")]),e._v(", "),a("strong",[e._v("EOG")]),e._v(", "),a("strong",[e._v("AGGCN")]),e._v(", "),a("strong",[e._v("LSR-Glove")]),e._v(", "),a("strong",[e._v("LSR-BERT")]),e._v(": Previous graph-based methods, while our graph construction is totally different from theirs and they conduct logical reasoning only based on GCN.")]),e._v(" "),a("li",[a("strong",[e._v("GAIN-Glove")]),e._v(", "),a("strong",[e._v("GAIN-BERT")]),e._v(": Our proposed model with either Glove embedding or BERT.")])]),e._v(" "),a("p",[e._v("The evaluation metrics we use are F1/AUC and Ign-F1/Ign-AUC. The latter means we do not consider the triples (i.e., head-relation-tail) that are already contained in the training set.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(527),alt:"image5"}})]),e._v(" "),a("p",[e._v("The key observations are:")]),e._v(" "),a("ul",[a("li",[e._v("Among the models not using BERT or BERT variants, GAIN-GloVe consistently outperforms all sequential-based and graph-based strong baselines by 0.9∼12.82 F1 score on the test set.")]),e._v(" "),a("li",[e._v("Among the models using BERT or BERT variants, GAIN-BERT base yields a great improvement of F1/Ign F1 on dev and test set by 2.22/6.71 and 2.19/2.03, respectively, in comparison with the strong baseline LSR-BERT base. GAIN-BERT large also improves 2.85/2.63 F1/Ign F1 on test set compared with\nprevious state-of-the-art method, CorefRoBERTaRElarge.")]),e._v(" "),a("li",[e._v("GAIN can better utilize powerful BERT representation. LSR-BERT base improves F1 by 3.83 and 4.87 on dev and test set with GloVe embedding replaced with BERTbase while our GAIN-BERT base yields an improvement by 5.93 and 6.16.")])]),e._v(" "),a("h3",{attrs:{id:"ablation-study"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ablation-study"}},[e._v("#")]),e._v(" Ablation Study")]),e._v(" "),a("p",[e._v("We conduct ablation study by removing the mention-level graph, entity-level graph inference module, and the document node in the mention-level graph. The F1 scores on test set significantly decrease by 2.02~2.34/1.61~1.90 for GAIN-Glove/GAIN-BERT.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(528),alt:"image6"}})]),e._v(" "),a("h3",{attrs:{id:"further-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-analysis"}},[e._v("#")]),e._v(" Further Analysis")]),e._v(" "),a("h4",{attrs:{id:"cross-sentence-relation-extraction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-sentence-relation-extraction"}},[e._v("#")]),e._v(" Cross-sentence Relation Extraction")]),e._v(" "),a("p",[e._v("We evaluate GAIN on relations within a single sentence (Intra-F1) and those involving multiple sentences (Inter-F1), respectively. GAIN outperforms other baselines not only in Intra-F1 but also Inter-F1. The removal of Mention-level Graph (hMG) leads to a more considerable decrease in Inter-F1 than Intra-F1, which indicates\nour hMG do help interactions among mentions, especially those distributed in different sentences with long-distance dependency.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:n(529)}})]),e._v(" "),a("h4",{attrs:{id:"logical-reasoning-for-relation-extraction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logical-reasoning-for-relation-extraction"}},[e._v("#")]),e._v(" Logical Reasoning for Relation Extraction")]),e._v(" "),a("p",[e._v("We evaluate GAIN on relations requiring logical reasoning (Infer-F1), and the experimental results show GAIN can better handle relational inference. For example, GAIN-BERT base improves 5.11 Infer-F1 compared with RoBERTa-RE base. The inference module also plays an important role in capturing potential inference chains between entities, without which GAIN-BERT base would drop by 1.78 Infer-F1.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:n(530)}})]),e._v(" "),a("h3",{attrs:{id:"case-study"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-study"}},[e._v("#")]),e._v(" Case Study")]),e._v(" "),a("p",[e._v("The figure above shows the case study of our proposed model GAIN, in comparison with other baselines. As is shown, BiLSTM can only identify two relations within the first sentence. Both BERT-RE base and GAIN-BERT base can successfully predict "),a("strong",[e._v("Without Me")]),e._v(" is part of "),a("strong",[e._v("The Eminem Show")]),e._v(". But only GAIN-BERT base is able to deduce the performer and publication date of "),a("strong",[e._v("Without Me")]),e._v(" are the same as those of "),a("strong",[e._v("The Eminem Show")]),e._v(", namely "),a("strong",[e._v("Eminem")]),e._v(" and "),a("strong",[e._v("May 26, 2002")]),e._v(", where it requires logical inference across sentences.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(531),alt:"image9"}})]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Extracting inter-sentence relations and conducting relational reasoning are challenging in document-level relation extraction. In this paper, we introduce Graph Aggregationand-Inference Network (GAIN) to better cope with document-level relation extraction, which features double graphs in different granularity. GAIN\nutilizes a heterogeneous Mention-level Graph to model the interaction among different mentions across the document and capture document-aware features. It also uses an Entity-level Graph with a proposed path reasoning mechanism to infer relations more explicitly. Experimental results on the large-scale human annotated dataset, DocRED, show GAIN outperforms previous methods, especially in inter-sentence and inferential relations scenarios. The ablation study also confirms the effectiveness of different modules in our model.")]),e._v(" "),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),a("ul",[a("li",[e._v("Yuan Yao, Deming Ye, Peng Li, Xu Han, Yankai Lin, Zhenghao Liu, Zhiyuan Liu, Lixin Huang, Jie Zhou, Maosong Sun. 2019. DocRED: A Large-Scale Document-Level Relation Extraction Dataset. In Proceedings of ACL.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);